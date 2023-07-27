import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../redux/actions";
import { Nav } from "react-bootstrap";
import style from "./categoryList.module.css";

function CategoryList({ products }) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const cats = [];
    products?.forEach((element) => {
      cats.push(element.category);
    });
    const catsSet = new Set(cats);
    setCategoryList(Array.from(catsSet));
    const storedSelectedCategories = localStorage.getItem("selectedCategories");
    if (storedSelectedCategories) {
      setSelectedCategory(JSON.parse(storedSelectedCategories));
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory((prevSelectedCategories) =>
        prevSelectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategory((prevSelectedCategories) => [
        ...prevSelectedCategories,
        category,
      ]);
    }
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className={`${style.categoryListContainer} d-flex flex-column p-3`}>
      <Nav className="flex-column centradooo">
        {categoryList?.map((category) => (
          <Nav.Item
            key={category}
            id={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory.includes(category) ? style.select : ""}
          >
            <Nav.Link
              className="nav-item nav-link link-body-emphasis active"
              href="#"
              style={{ textDecoration: "none" }}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default CategoryList;

import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../redux/actions";
import style from "./categoryList.module.css"

function CategoryList({ products }) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const cats = [];
    products?.forEach((element) => {
      cats.push(element.category);
    });
    const catsSet = new Set(cats);
    setCategoryList(Array.from(catsSet));
  }, [products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(setCategoryFilter(category));
  };

  return (
    <div class="nav-scroller py-1 mb-3 border-bottom container mt-5 mb-5">
      <nav class="nav nav-underline justify-content-between">
        {categoryList?.map((category) => (
          <ListGroup.Item
            key={category}
            id={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            <a class="nav-item nav-link link-body-emphasis active" className={style.textmodificado} href="#">
              {category}
            </a>
          </ListGroup.Item>
        ))}
      </nav>
    </div>
  );
}

export default CategoryList;

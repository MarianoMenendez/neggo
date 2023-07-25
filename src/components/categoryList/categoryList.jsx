import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../redux/actions";

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
    <ListGroup style={{ display: "flex", flexDirection: "row" }}>
      {categoryList?.map((category) => (
        <ListGroup.Item
          key={category}
          id={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CategoryList;

import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';

function CategoryList({products, setCatFilter}) {
  const [categoryList, setCategoryList] = useState([])
  console.log(typeof setCatFilter)

  useEffect(()=>{
    const cats = []
    products?.forEach(element => {
      cats.push(element.category)
    })
    const catsSet = new Set(cats)
    setCategoryList(Array.from(catsSet))

  },[products])
  return (
    <ListGroup style={{display: "flex", flexDirection: "row"}}>
      {categoryList?.map(category=> <ListGroup.Item id={category} onClick={(e)=>{setCatFilter(e.target.id)}}>{category}</ListGroup.Item>)}
    </ListGroup> 
  );
}

export default CategoryList;
import styled from "styled-components";
import  { Category }  from "../data";
import CategoryItem from "./CategoryItem";
import React from "react";
import { mobile } from "../Responsive";

const Container = styled.div`
  display : flex;
  padding : 20px;
  justify-content: space-between;
  ${mobile({padding :"0px",flexDirection:"column"})}
  `;

const Categories = () => {
  return (
    <Container>
      {Category.map (item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}

    </Container>
  );
};

export default Categories;
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from '../Responsive';

const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
${mobile({width :"0px 20px ", display:"flex", flexDirection:"column"})}
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText= styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight :"0px"})}
`;

const Select =styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin :"10px 0px"})}
`;
const Option =styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Watches</Title>
      <FilterContainer>
        <Filter>
               <FilterText>Filter Products</FilterText>
               <Select>
                <Option displayed selected>
                    color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
               </Select>
               <Select>
                <Option displayed selected>
                    Size
                </Option>
                <Option>s</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>xL</Option>
               </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList
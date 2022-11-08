import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../Responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBotton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountConatiner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 20px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const navigate = useNavigate();
  const [productAmountShoe, setProductAmountShoe] = useState(1);
  const [productAmountRolex, setProductAmountRolex] = useState(1);
  const [productPriceShoe, setProductPriceShoe] = useState(10000);
  const [productPriceRolex, setProductPriceRolex] = useState(20000);
  const handleAmount = (type, product) => {
    if (product === "shoe") {
      if (type === "add") {
        setProductAmountShoe((productAmountShoe) => productAmountShoe + 1);
      } else if (type === "reduce" && productAmountShoe > 1) {
        setProductAmountShoe((productAmountShoe) => productAmountShoe - 1);
      }
    } else if (product === "rolex") {
      if (type === "add") {
        setProductAmountRolex((productAmountRolex) => productAmountRolex + 1);
      } else if (type === "reduce" && productAmountRolex > 1) {
        setProductAmountRolex((productAmountRolex) => productAmountRolex - 1);
      }
    }
  };
  useEffect(() => {
    setProductPriceShoe(productAmountShoe * 10000);
    setProductPriceRolex(productAmountRolex * 20000);
  }, [productAmountShoe, productAmountRolex]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR SHOES</Title>
        <Top>
          <TopBotton
            onClick={(e) => {
              navigate("/");
            }}
          >
            CONTINUE SHOPPING
          </TopBotton>
          <TopTexts>
            <TopText>SPORT SHOES(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBotton
            onClick={(e) => {
              alert(
                `Do you want to checkout now, Your total price is ${
                  productPriceRolex + productPriceShoe+300
                }`
              );
            }}
            type="filled"
          >
            CHECKOUT NOW
          </TopBotton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5846SNrxExZEwlb6uaTss93pABoE7tCRvA&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Nike shoe
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 5642
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 39{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountConatiner>
                  <IconButton onClick={(e) => handleAmount("add", "shoe")}>
                    <AddIcon />
                  </IconButton>
                  <ProductAmount>{productAmountShoe}</ProductAmount>
                  <IconButton onClick={(e) => handleAmount("reduce", "shoe")}>
                    <RemoveIcon />
                  </IconButton>
                  <ProductPrice>Rs.{productPriceShoe}</ProductPrice>
                </ProductAmountConatiner>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6y-kIGjfrpmAxm05IkaIhTXB2di7RxFKCQ&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Rolex
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 5654
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> free{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountConatiner>
                  <IconButton onClick={(e) => handleAmount("add", "rolex")}>
                    <AddIcon />
                  </IconButton>
                  <ProductAmount>{productAmountRolex}</ProductAmount>
                  <IconButton onClick={(e) => handleAmount("reduce", "rolex")}>
                    <RemoveIcon />
                  </IconButton>
                  <ProductPrice>Rs. {productPriceRolex}</ProductPrice>
                </ProductAmountConatiner>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                Rs. {productPriceRolex + productPriceShoe}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Delivery</SummaryItemText>
              <SummaryItemPrice>Rs. 500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Discount</SummaryItemText>
              <SummaryItemPrice>Rs -200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                Rs. {productPriceRolex + productPriceShoe + 300}
              </SummaryItemPrice>
            </SummaryItem>
            <Button
              onClick={(e) => {
                alert(
                  `Do you want to checkout now, Your total price is ${
                    productPriceRolex + productPriceShoe+300
                  }`
                );
              }}
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
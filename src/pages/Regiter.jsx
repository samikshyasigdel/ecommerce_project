import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255255, 0.5)),
    url("https://image.shutterstock.com/image-photo/black-stone-wall-texture-pattern-260nw-1452640079.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    
  });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setFormData({
        ...formData,
        name: e.target.value,
      });
    } else if (e.target.name === "lName") {
      setFormData({
        ...formData,
        lName: e.target.value,
      });
    } else if (e.target.name === "username") {
      setFormData({
        ...formData,
        userName: e.target.value,
      });
    } else if (e.target.name === "email") {
      setFormData({
        ...formData,
        email: e.target.value,
      });
    } else if (e.target.name === "password") {
      setFormData({
        ...formData,
        password: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefult();
  //  hit the api with this form data which will create a new user instance
    console.log(formData);
  };
  console.log("Hi this register",formData);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="name"
            onChange={handleChange}
            name="fname"
            value={formData.name}
          />
          <Input
            placeholder="last name"
            onChange={handleChange}
            name="lName"
            value={formData.lName}
          />
          <Input
            placeholder="username"
            onChange={handleChange}
            name="username"
            value={formData.userName}
          />
          <Input
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <Input
            type="password"
            placeholder="confirm password"
            // onChange={handleChange}
            name="confirmPassword"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            ata in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="button">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

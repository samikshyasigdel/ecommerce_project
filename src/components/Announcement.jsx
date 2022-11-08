import styled from "styled-components";
import React from "react";

const Container = styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 400;
letter-spacing: 3px;
`;

const Announcement = () => {
  return (
    <Container>
        <h1>Where comfort meets elegance</h1>
    </Container>
  )
}

export default Announcement;
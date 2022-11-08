import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { mobile } from '../Responsive';
const Container = styled.div`
display: flex;
${mobile({flexDirection :"50columnx"})}
`;

const Left = styled.div`
flex: 1;
flex:-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialConatiner= styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;





const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display :"none"})}
`;

const Title = styled.h3`
margin-bottom: 30px;

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
 display: flex;
 flex-wrap: wrap;
`;

const ListItem =styled.li`
width: 50%;
margin-bottom: 10px;
`;


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor :"#fff8f8"})}
`;

 const ContactItem= styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
 `;

const Payment= styled.img`
width:100%;

`;


const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>OWN STORE.</Logo>
        <Desc> ......</Desc>
        <SocialConatiner>
            <SocialIcon color="3B5999">
               <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color="3E4405F">
               <InstagramIcon/>
            </SocialIcon >
            <SocialIcon color="55ACEE">
               <TwitterIcon/>
            </SocialIcon>
            <SocialIcon color="E60023">
               <PinterestIcon/>
            </SocialIcon>
        </SocialConatiner>
        </Left>
       <Center>
        
        <Title>
            Useful Links
        </Title><List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>
            </List>
            </Center>
       <Right> 
        <Title>Contact</Title>
        <ContactItem>
           <RoomIcon style={{marginRight: "10px"}}/> Nadipur-3 , Pokhara
        </ContactItem>
        <ContactItem>
           <PhoneIcon style={{marginRight: "10px"}}/> +9779828341000
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{marginRight: "10px"}}/> contact@ownstore.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
       </Right>
  
    </Container>
  );
};

export default Footer;
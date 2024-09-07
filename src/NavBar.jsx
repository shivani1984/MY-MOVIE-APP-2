import React from "react";
import styled from "styled-components";

const Nav = styled.div`
background: linear-gradient(to right, #00416A, #2C5364, #0F9B8E, #00A896, #02C39A);

;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* To vertically center the content */
`;

const Title = styled.div`
font-size: 34px; 
color: red; /* Text color of the title */
font-weight: bold; /* Bold text */
text-transform: uppercase; /* Uppercase text */
margin: 0; /* Remove default margin */;
&:hover{color:white}`

const CartCount = styled.div`
background-color : ${(props)=>props.color};
border-radius:50%;
position:absolute;
right:15px;
top: 5px;
font-size:20px;
visibility: ${(props) => props.show ? "visible" : "hidden"};

`;

const CartImg = styled.img`
height:48px;
margin-right:30px;
`;

const IconContainer = styled.div`
position:relative;
cursor:pointer;

`;





class NavBar extends React.Component {
    render() {
        return (
            <>
                <Nav>
                    
                
                    <Title>Title</Title>
                    <IconContainer>
                        <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"/>
                        <CartCount color = "yellow" show ={false}>0</CartCount>
                    </IconContainer>
                </Nav>
            </>
        );
    }
}

export default NavBar;

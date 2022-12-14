import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@mui/material/Badge";
import { mobile } from '../responsive';
import { categoryData } from '../slideData';
import { KeyboardArrowDownRounded, KeyboardArrowRightRounded, ShoppingCartOutlined, CloseRounded, MenuOpenRounded } from '@mui/icons-material';


const StyledNavbar = styled.div`
  height: 60px;
  background-color: var(--color-brown);
  position: sticky;
  top: 0;
  z-index: 4;
  ${mobile({height:"50px"})};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({height: "50px", padding: "5px 5px"})};
`;

const Left = styled.div`
  flex: 1;
  text-align: start;
  padding-left: 50px;
  ${mobile({textAlign: "center", flex: "1.7"})};
`;

const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
  font-variant: unicase;
  width: 100px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  ${mobile({textAlign: "center", flex: "0.3", paddingRight: "15px"})};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  color: var(--color-orange);
  ${mobile({display: "none"})};
`;

const MenuStyle = styled.div`
  height: 40px; 
  border-radius: 5px; 
  padding: 4px; 
  border: 2px solid #f1b604; 
  display: inline-flex;
  align-items: center;
  color: #f1b604;
  &:hover {
    background-color: #f1b604;
    color: #fff;
    & ${MenuItem} {
      color: #fff;
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }
  };
  ${mobile({height: "30px", border: "none"})};
`;

const CartItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({fontSize: "11px", marginLeft: "auto"})};
`;

const LanguageStyle = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 25px;
  font-size: 13px;
  ${mobile({display: "none"})};
`;

const SignupMobile = styled.div``;
const LoginMobile = styled.div``;
const LanguageMobile = styled.div``;
const ToggleIcons = styled.div`
  padding: 2px;
  display: none;
  margin-right: 10px;
  & svg {font-size: 40px;};
  ${mobile({display: "flex"})};
`;


const MobileMenu = styled.div`
  // height: 50vh;
  height: 80vh;
  background-color: #fff;
  position: absolute;
  top: 52px;
  padding-bottom: 20px;
  right: -3px;
  transition: width 0.4s ease;
  width: ${props => props.width}vw;
  // width: 72vw;
  // display: ${props => props.display};
  display: flex;
  flex-flow: column;
  align-items: center;
  border-top: 40px solid #eee;
  border-bottom: 40px solid var(--color-orange);
  border-radius: 0 0 0 30px;
  // & a {
  //   width: 70%;
  //   margin: 5px;
  // };
  & ${SignupMobile} {
    height: 40px;
    width: 70%;
    margin: 5px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-brown);
    color: #fff;
    border-radius: 4px;    
    padding: 0 20px;
    &:hover {
      opacity: 0.7;
    }
  };
  & ${LoginMobile} {
    height: 40px;
    width: 70%;
    margin: 5px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-orange);
    border-radius: 4px;
    padding: 0 20px;
    color: var(--color-brown);
    &:hover {
      opacity: 0.7;
    }
  };
  & ${LanguageMobile} {
    height: 40px;
    width: 70%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #eee;
    border-radius: 4px;
    margin: 5px;
    padding: 0 20px;
    color: red;
  }
`;

const Categories = styled.div`
    width: 70%;
    transition: all 0.5s ease;
    min-height: 250px;
    padding: 10px 5px 10px 10px;
    border: 2px solid #eee;
    margin-top: 20px;
    overflow-y: scroll;
    position: relative;
`;

const CategoryTitle = styled.div`
    transition: all 0.5s ease;
    text-align: left;
    position: sticky;
    top: 0;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: #ffeed3;
    font-weight: 600;
    padding-left: 10px;
`;

const CategoryItem = styled.div`
    cursor: pointer;
    height:30px;
    width: 100%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
    padding-left: 10px;
    display: flex;
    color: var(--color-brown);
    align-items: center;
    transition: all 0.5s ease;
    &:hover {
      background-color: #eee;
    }
`;

// const LanguageStyle = styled.span`
//   color: red;
//   cursor: pointer;
//   margin-left: 25px;
//   font-size: 13px;
// `;

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {mobileMenu: 0, closeIcon: "none", openIcon: "flex"};
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    this.setState(st => (
      {mobileMenu: 72, closeIcon: "flex", openIcon: "none"}
    ))
  }

  handleMenuClose() {
    this.setState(st => (
      {mobileMenu: 0, closeIcon: "none", openIcon: "flex"}
    ))
  }

  render() {
    return (
      <StyledNavbar>
        <Wrapper>
          <Left> 
            <Link to="/"><Logo>MegaTron</Logo></Link>
          </Left>
          <Right>
            <MenuStyle>
              <Link to="/new"><MenuItem>Signup</MenuItem></Link>
              <Link to="/login"><MenuItem>Login</MenuItem></Link>
              <Link to="/cheqout">
                <CartItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined style={{color: "#001"}}/>
                  </Badge>
                </CartItem>
              </Link>
            </MenuStyle>
            <LanguageStyle>ENG</LanguageStyle>
          </Right>
          <ToggleIcons>
            <CloseRounded style={{fill: "var(--color-orange)",display: this.state.closeIcon, transition: "all 1s ease-in"}} onClick={this.handleMenuClose} />
            <MenuOpenRounded style={{fill: "var(--color-orange)",display: this.state.openIcon, transition: "all 1s ease-out"}} onClick={this.handleMenuOpen} />
          </ToggleIcons>
          <MobileMenu width={this.state.mobileMenu}>
            {this.state.mobileMenu ? 
            <>
              <Link to="/new"><SignupMobile><span>Signup</span><KeyboardArrowRightRounded /></SignupMobile></Link>
              <Link to="/login"><LoginMobile><span>Login</span><KeyboardArrowRightRounded /></LoginMobile></Link>
              <LanguageMobile><span>ENG</span><KeyboardArrowDownRounded /></LanguageMobile>
              <Categories>
                <CategoryTitle>Product Categories</CategoryTitle>
                { categoryData.map(data => (
                  <Link to="/all"><CategoryItem key={data.id}>{data.cat}</CategoryItem></Link>
                ))}
              </Categories>
            </>
            : ""}
          </MobileMenu>            
        </Wrapper>
      </StyledNavbar>
    )
  }
}

export default Navbar;
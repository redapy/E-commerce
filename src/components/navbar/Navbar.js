import { Component } from "react";
import { NavLink } from "react-router-dom";
//components
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";
//styles
import { CartIcon, Logo, Nav, NavLinks, Side, Wrapper } from "./Navbar.styles";
//icons
import logo from "../../assests/logo.svg";
import cartIcon from "../../assests/cartIcon.svg";

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <NavLinks>
            <li>
              <NavLink to="/categories/all">all</NavLink>
            </li>
            <li>
              <NavLink to="/categories/clothes">clothes</NavLink>
            </li>
            <li>
              <NavLink to="/categories/tech">tech</NavLink>
            </li>
          </NavLinks>
        </Nav>
        <Logo>
          <img src={logo} alt="logo icon" />
        </Logo>
        <Side>
          <CurrencySwitcher />
          <CartIcon>
            <img src={cartIcon} alt="cart icon" />
          </CartIcon>
        </Side>
      </Wrapper>
    );
  }
}

export default Navbar;

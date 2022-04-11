import { Component } from "react";
import { NavLink } from "react-router-dom";
//components
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";
//styles
import { CartIcon, Logo, Nav, NavLinks, Side, Wrapper } from "./Navbar.styles";
//icons
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import CartOverlay from "../cartOverlay/CartOverlay";
import QuantityBadge from "../quntityBadge/QuantityBadge";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartIsOpened: false,
    };
  }
  //function to open/close the cart overlay
  toggleCart = () => {
    this.setState((prevState) => ({
      cartIsOpened: !prevState.cartIsOpened,
    }));
  };
  render() {
    const { cartIsOpened } = this.state;
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
          <CartIcon onClick={this.toggleCart}>
            <QuantityBadge />
            <img src={cartIcon} alt="cart icon" />
          </CartIcon>
          {cartIsOpened && <CartOverlay />}
        </Side>
      </Wrapper>
    );
  }
}

export default Navbar;

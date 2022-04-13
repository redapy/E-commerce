import { Component } from "react";

//components
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";
import QuantityBadge from "../quntityBadge/QuantityBadge";
import CategoryLinks from "./CategoryLinks";
//styles
import { CartIcon, Logo, Side, Wrapper } from "./Navbar.styles";
//icons
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import CartOverlay from "../cartOverlay/CartOverlay";

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

  //function to close the cart
  closeCart = () => {
    this.setState({
      cartIsOpened: false,
    });
  };

  render() {
    const { cartIsOpened } = this.state;

    return (
      <Wrapper>
        <CategoryLinks />
        <Logo>
          <img src={logo} alt="logo icon" />
        </Logo>
        <Side>
          <CurrencySwitcher />
          <CartIcon onClick={this.toggleCart}>
            <QuantityBadge />
            <img src={cartIcon} alt="cart icon" />
          </CartIcon>
          {cartIsOpened && <CartOverlay closeCart={this.closeCart} />}
        </Side>
      </Wrapper>
    );
  }
}

export default Navbar;

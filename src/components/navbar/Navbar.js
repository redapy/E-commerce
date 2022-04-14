import { Component, createRef } from "react";

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
    this.cartIconRef = createRef();
  };

  //function to close the cart
  closeCart = (e) => {
    // check that is not the cart icon. Because the cart icon already have a toggle function that set the state to the prev state.
    // if we click on the cart icon, it count as outside the modal it will close the cart (isOpen will be false),
    //  then the toggel function will be triggered also ans set isOpen to be true, which make the cart to close and open again.
    //this condition makes sure that doesn't happen
    if (this.cartIconRef && !this.cartIconRef.current.contains(e.target)) {
      this.setState({
        cartIsOpened: false,
      });
    }
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
          <CartIcon ref={this.cartIconRef} onClick={this.toggleCart}>
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

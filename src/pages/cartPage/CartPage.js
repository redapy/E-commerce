import { Component } from "react";
import CartItems from "../../components/cartItems/CartItems";

//styles
import { Header, Wrapper } from "./CartPage.styles";

class CartPage extends Component {
  render() {
    return (
      <Wrapper>
        <Header>cart</Header>
        <CartItems />
      </Wrapper>
    );
  }
}

export default CartPage;

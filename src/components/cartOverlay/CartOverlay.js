import { Component } from "react";
//redux
import { connect } from "react-redux";
//router
import { Link } from "react-router-dom";
import { calculteQuantity } from "../../utils/helpers";
//components
import CartItems from "../cartItems/CartItems";
//styles
import {
  Button,
  ButtonsGroup,
  Header,
  OverLay,
  Wrapper,
} from "./CartOverlay.styles";
import TotalPrice from "./TotalPrice";

class CartOverlay extends Component {
  render() {
    const { items } = this.props;

    //get the total items in the cart
    const totalQuanity = calculteQuantity(items);

    return (
      <Wrapper>
        <OverLay>
          <Header>
            My bag, <span>{totalQuanity} items</span>
          </Header>
          <CartItems overlay={true} />
          <TotalPrice />
          <ButtonsGroup>
            <Button>
              <Link to="/cart">view bag</Link>
            </Button>
            <Button checkout>check out</Button>
          </ButtonsGroup>
        </OverLay>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartItems,
});

export default connect(mapStateToProps)(CartOverlay);

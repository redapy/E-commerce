import { Component } from "react";
import ReactDOM from "react-dom";
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

    return ReactDOM.createPortal(
      <Wrapper>
        <OverLay>
          <Header>
            My bag, <span>{totalQuanity} items</span>
          </Header>
          {/* the overlay property here is only for styling purposes */}
          <CartItems overlay={true} />
          <TotalPrice />
          <ButtonsGroup>
            <Button>
              <Link to="/cart">view bag</Link>
            </Button>
            <Button checkout>check out</Button>
          </ButtonsGroup>
        </OverLay>
      </Wrapper>,
      document.body
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartItems,
});

export default connect(mapStateToProps)(CartOverlay);

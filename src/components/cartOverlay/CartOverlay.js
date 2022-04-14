import { Component, createRef } from "react";
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
  constructor(props) {
    super(props);
    this.cartRef = createRef();
  }
  // check if we clicked outside of the cart overlay
  handleClickOutsideCart = (e) => {
    if (this.cartRef && !this.cartRef.current.contains(e.target)) {
      this.props.closeCart(e);
    }
  };
  //detect click on the document
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutsideCart);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideCart);
  }

  render() {
    const { items, closeCart } = this.props;

    //get the total items in the cart
    const totalQuanity = calculteQuantity(items);

    return ReactDOM.createPortal(
      <Wrapper>
        <OverLay ref={this.cartRef}>
          <Header>
            My bag, <span>{totalQuanity} items</span>
          </Header>
          {/* the overlay property here is only for styling purposes */}
          <CartItems overlay={true} />
          <TotalPrice />
          <ButtonsGroup>
            <Button onClick={closeCart}>
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

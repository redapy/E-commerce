import { Component } from "react";
import { connect } from "react-redux";
import { updateQuantity } from "../../store/actions/cartActions";
//styles
import { Button, Quantity, Warapper } from "./ProductQuantiy.styles";

class ProductQuantiy extends Component {
  render() {
    //destructre variables from the props
    const { quantity, id, dispatch, overlay } = this.props;

    // function to increase the product quantity
    const increaseQuantity = () => {
      const newQuantity = quantity + 1;
      dispatch(updateQuantity({ quantity: newQuantity, id }));
    };
    //function to decrease the product quntity
    const decreaseQuantity = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        dispatch(updateQuantity({ quantity: newQuantity, id }));
      }
    };
    return (
      <Warapper>
        <Button onClick={increaseQuantity} overlay={overlay}>
          +
        </Button>
        <Quantity overlay>{quantity}</Quantity>
        <Button onClick={decreaseQuantity} overlay={overlay}>
          -
        </Button>
      </Warapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(ProductQuantiy);

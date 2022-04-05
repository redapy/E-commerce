import { Component } from "react";
import { connect } from "react-redux";
import { updateQuantity } from "../../store/actions/cartActions";
//styles
import { Button, Quantity, Warapper } from "./ProductQuantiy.styles";

class ProductQuantiy extends Component {
  render() {
    const { quantity, id, dispatch } = this.props;

    const increaseQuantity = () => {
      const newQuantity = quantity + 1;
      dispatch(updateQuantity({ quantity: newQuantity, id }));
    };

    const decreaseQuantity = () => {
      const newQuantity = quantity - 1;
      dispatch(updateQuantity({ quantity: newQuantity, id }));
    };
    return (
      <Warapper>
        <Button onClick={increaseQuantity}>+</Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={decreaseQuantity}>-</Button>
      </Warapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(ProductQuantiy);

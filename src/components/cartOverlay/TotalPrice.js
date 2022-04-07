import { Component } from "react";
//redux
import { connect } from "react-redux";
import { getAmount } from "../../utils/helpers";
//styles
import { Wrapper } from "./TotalPrice.styles";
class TotalPrice extends Component {
  render() {
    // destructre the variables needed from the props
    const { items, currencySymbol } = this.props;
    console.log(items);
    // get the total price of all the product inside the cart
    //I use the "getAmount" helper to get the price from the prices array
    const totalPrice = items.reduce((total, item) => {
      return total + getAmount(item.price, currencySymbol) * item.quantity;
    }, 0);

    return (
      <Wrapper>
        <p>Total</p>
        <span>
          {currencySymbol} {totalPrice}
        </span>
      </Wrapper>
    );
  }
}

// connect the component props with the redux-store state
// get the state in the cartItems store and assign it to a prop named "items",
// get the state in the currency store and assign to a prop named "currencySymbol"
const mapStateToProps = (state) => ({
  items: state.cartItems,
  currencySymbol: state.currency.symbol,
});

export default connect(mapStateToProps)(TotalPrice);

import { Component } from "react";
//redux
import { connect } from "react-redux";
//utils
import { getAmount } from "../../utils/helpers";
//styles
import { Price } from "./ProductPrice.styles";
class ProductPrice extends Component {
  render() {
    // Get the selected currency from the redux store and the overlay property for styles
    const { currencySymbol, prices, overlay } = this.props;

    //use the helper function to get the price of a product depending on the currency selected
    const amount = getAmount(prices, currencySymbol);

    return (
      <Price overlay={overlay}>
        {currencySymbol} {amount}
      </Price>
    );
  }
}

// connect the component props with the redux-store state, name the prop "currencySymbol"
const mapStateToProps = (state) => ({
  currencySymbol: state.currency.symbol,
});

export default connect(mapStateToProps)(ProductPrice);

import { Component } from "react";
//redux
import { connect } from "react-redux";
import { compose } from "redux";
class ProductPrice extends Component {
  render() {
    // Get the selected currency from the redux store
    const { currencySymbol, prices } = this.props;
    //this is a helper function to get the amout of a product depending on the currency selected
    const getAmount = (prices, currency) => {
      const amountArray = prices.filter((price) => {
        return price.currency.symbol === currency;
      });
      const amount = amountArray[0].amount;
      return amount;
    };
    return (
      <p>
        {currencySymbol} {getAmount(prices, currencySymbol)}
      </p>
    );
  }
}

// connect the component props with the redux-store state, name the prop "currencySymbol"
const mapStateToProps = (state) => ({
  currencySymbol: state.currency.symbol,
});

export default connect(mapStateToProps)(ProductPrice);

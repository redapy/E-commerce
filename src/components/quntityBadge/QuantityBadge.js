import { Component } from "react";
//redux
import { connect } from "react-redux";
//utils
import { calculteQuantity } from "../../utils/helpers";
//styles
import { Badge } from "./QuantityBadge.styles";

class QuantityBadge extends Component {
  render() {
    const { items } = this.props;

    // compute the total items in the cart
    const totalQuantity = calculteQuantity(items);

    return <Badge>{totalQuantity}</Badge>;
  }
}

const mapStateToProps = (state) => ({
  items: state.cartItems,
});

export default connect(mapStateToProps)(QuantityBadge);

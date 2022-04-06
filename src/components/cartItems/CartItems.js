import { Component } from "react";
//redux
import { connect } from "react-redux";
//components
import ProductPrice from "../productPrice/ProductPrice";
import ProductQuantiy from "./ProductQuantiy";
import Carousel from "./Carousel";
//styles
import {
  Item,
  Content,
  ProductBrand,
  ProductName,
  ItemDetails,
  SelectedAttributes,
} from "./CartItems.styles";

class CartItems extends Component {
  render() {
    const { items } = this.props;
    return (
      <Content>
        {items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id}>
              <ItemDetails>
                <ProductBrand>{item.brand}</ProductBrand>
                <ProductName>{item.name}</ProductName>
                <ProductPrice prices={item.price} />
                <SelectedAttributes>
                  {Object.keys(item.attributes).map((attrKey) => (
                    <li
                      key={attrKey}
                      style={{ background: item.attributes[attrKey] }}
                    >
                      {attrKey === "Color" ? "" : item.attributes[attrKey]}
                    </li>
                  ))}
                </SelectedAttributes>
              </ItemDetails>
              <ProductQuantiy quantity={item.quantity} id={item.id} />
              <Carousel images={item.gallery} />
            </Item>
          ))
        ) : (
          <p>
            You haven't add anything to the cart yet, add some prodcust please!
          </p>
        )}
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartItems);

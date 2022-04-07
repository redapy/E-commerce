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
  EmptyCart,
} from "./CartItems.styles";

class CartItems extends Component {
  render() {
    const { items, overlay } = this.props;

    return (
      <Content>
        {items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} overlay={overlay}>
              <ItemDetails>
                <ProductBrand overlay={overlay}>{item.brand}</ProductBrand>
                <ProductName overlay={overlay}>{item.name}</ProductName>
                <ProductPrice prices={item.price} overlay={overlay} />
                <SelectedAttributes overlay={overlay}>
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
              <ProductQuantiy
                quantity={item.quantity}
                id={item.id}
                overlay={overlay}
              />
              <Carousel images={item.gallery} overlay={overlay} />
            </Item>
          ))
        ) : (
          <EmptyCart>
            You haven't add anything to the cart yet, add some prodcust please!
          </EmptyCart>
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

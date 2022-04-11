import { Component } from "react";
//redux
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions/cartActions";
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
  DeleteItem,
} from "./CartItems.styles";
//icons
import trashcan from "../../assets/trash-can.svg";

class CartItems extends Component {
  render() {
    const { items, overlay, dispatch } = this.props;

    const handleDelete = (id) => {
      dispatch(deleteProduct(id));
    };

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
                <DeleteItem onClick={() => handleDelete(item.id)}>
                  <img src={trashcan} alt="delete this product" />
                </DeleteItem>
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
          <EmptyCart>Your Cart is empty!</EmptyCart>
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

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);

import { Component } from "react";
//redux
import { connect } from "react-redux";
//components
import ProductPrice from "../../components/productPrice/ProductPrice";
import ProductQuantiy from "../../components/productQuantity/ProductQuantiy";
//styles
import {
  Header,
  Item,
  Content,
  Wrapper,
  ProductBrand,
  ProductName,
  ItemDetails,
  SelectedAttributes,
} from "./CartPage.styles";

class CartPage extends Component {
  render() {
    const { items } = this.props;
    return (
      <Wrapper>
        <Header>cart</Header>
        <Content>
          {items.length > 0 ? (
            items.map((item) => (
              <Item key={item.id}>
                <ItemDetails>
                  <ProductBrand>{item.barnd}</ProductBrand>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice prices={item.price} />
                  <SelectedAttributes>
                    {Object.keys(item.attributes).map((attrKey) => (
                      <li
                        key={attrKey}
                      >{`${attrKey}: ${item.attributes[attrKey]}`}</li>
                    ))}
                  </SelectedAttributes>
                </ItemDetails>
                <ProductQuantiy quantity={item.quantity} id={item.id} />
              </Item>
            ))
          ) : (
            <p>
              You haven't add anything to the cart yet, add some prodcust
              please!
            </p>
          )}
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartPage);

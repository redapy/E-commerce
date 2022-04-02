import { Component } from "react";
// react-router
import { withRouter } from "react-router-dom";
//redux
import { compose } from "redux";
//Apollo and query
import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCT_DETAILS } from "../../utils/queries";
// styles
import {
  AddCartButton,
  Brand,
  Description,
  Grid,
  Price,
  ProductDetails,
  ProductName,
  Wrapper,
} from "./ProductDescription.styles";
//components
import Gallery from "./Gallery";
import ProductAttributes from "./ProductAttributes";
import ProductPrice from "../../components/productPrice/ProductPrice";

class ProductDescription extends Component {
  render() {
    const { loading, product } = this.props.data;
    return (
      <Wrapper>
        {loading && <p>Loading...</p>}
        {product && (
          <Grid>
            <Gallery gallery={product.gallery} alt={product.name} />
            <ProductDetails>
              <Brand>{product.brand}</Brand>
              <ProductName>{product.name}</ProductName>
              <ProductAttributes attributes={product.attributes} />
              <Price>
                <span>Price:</span>
                <ProductPrice prices={product.prices} />
              </Price>
              <AddCartButton>ADD TO CART</AddCartButton>
              <Description
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </ProductDetails>
          </Grid>
        )}
      </Wrapper>
    );
  }
}

export default compose(
  withRouter,
  graphql(GET_PRODUCT_DETAILS, {
    options: (props) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  })
)(ProductDescription);

import { Component } from "react";
// react-router
import { withRouter } from "react-router-dom";
//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/cartActions";
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAttributes = (attributes) => {
    this.setState(attributes);
  };
  render() {
    const { loading, product } = this.props.data;
    const { id } = this.props.match.params;
    const handleAddToCart = (id, brand, name, price, gallery, attributes) => {
      this.props.dispatch(
        addProduct({ id, brand, name, price, gallery, attributes, quantity: 1 })
      );
    };
    return (
      <Wrapper>
        {loading && <p>Loading...</p>}
        {product && (
          <Grid>
            <Gallery gallery={product.gallery} alt={product.name} />
            <ProductDetails>
              <Brand>{product.brand}</Brand>
              <ProductName>{product.name}</ProductName>
              <ProductAttributes
                attributes={product.attributes}
                getAttributes={this.getAttributes}
              />
              <Price>
                <span>Price:</span>
                <ProductPrice prices={product.prices} />
              </Price>
              <AddCartButton
                onClick={() =>
                  handleAddToCart(
                    id,
                    product.brand,
                    product.name,
                    product.prices,
                    product.gallery,
                    this.state
                  )
                }
              >
                ADD TO CART
              </AddCartButton>
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

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(
  withRouter,
  graphql(GET_PRODUCT_DETAILS, {
    options: (props) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  }),
  connect(mapDispatchToProps)
)(ProductDescription);

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

  // this funtion will grab the attributes selected from the child component and update this component state
  getAttributes = (attributes) => {
    this.setState(attributes);
  };

  render() {
    // destruct the variables (data) we get back from the GraphQL backend
    const { loading, product, error } = this.props.data;
    // get the current product id from the URL
    const { id } = this.props.match.params;

    // function that takes an object and then dspatch an action in order to update the redux store,
    // more specifically to update the cartItem store related to the cart.
    const handleAddToCart = (product) => {
      this.props.dispatch(addProduct({ ...product, quantity: 1 }));
    };

    // function that genrate a unique id, in case a user add the same product with different attributes
    const generateID = (id, attributes) => {
      // get the attributes values
      const attrValuesArray = Object.values(attributes);
      // contract the original id with the attributes values to get a new unique id
      const genereatedid = attrValuesArray.reduce((idString, attr) => {
        return idString + attr;
      }, id);
      return genereatedid;
    };

    return (
      <Wrapper>
        {error && <p>Something went Wrong ../</p>}
        {loading && <p>Loading...</p>}
        {product && (
          <Grid>
            <Gallery gallery={product.gallery} alt={product.name} />
            <ProductDetails
              onSubmit={(e) => {
                e.preventDefault();
                handleAddToCart({
                  id: generateID(id, this.state),
                  brand: product.brand,
                  name: product.name,
                  price: product.prices,
                  gallery: product.gallery,
                  attributes: this.state,
                });
              }}
            >
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

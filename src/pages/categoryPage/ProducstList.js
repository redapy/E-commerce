import { Component } from "react";
import { Link } from "react-router-dom";
//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/cartActions";
//components
import ProductPrice from "../../components/productPrice/ProductPrice";
//Apollo and query
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORY_PRODUCTS } from "../../utils/queries";
//helpers
import { generateID } from "../../utils/helpers";
//styles and icons
import { Card, CartIcon, Grid, ProductImage } from "./ProducstList.styles";
import cart from "../../assets/cartIcon.svg";

class ProducstList extends Component {
  render() {
    //destructer the variables from the data I get back from GraphQL
    const { loading, error, category } = this.props.data;

    // function that takes an object and then dspatch an action in order to update the redux store,
    // more specifically to update the cartItem store related to the cart.
    const handleAddToCart = (product) => {
      this.props.dispatch(addProduct({ ...product, quantity: 1 }));
    };

    // Because a product can't be added to a cart without attributes,
    //I will use this function to construct an object of the first attributes.
    const getFirstAttrs = (attributes) => {
      const firstAttrs = {};
      attributes.forEach((attribubte) => {
        const key = attribubte.id;
        const value = attribubte.items[0].value;
        firstAttrs[key] = value;
      });
      return firstAttrs;
    };

    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong....</p>}
        <Grid>
          {category &&
            category.products.map((product) => (
              <Card key={product.id} inStock={product.inStock}>
                <ProductImage>
                  {!product.inStock && <p>out of stock</p>}
                  <img src={product.gallery[0]} alt={product.name} />
                  <CartIcon
                    onClick={() =>
                      handleAddToCart({
                        id: generateID(
                          product.id,
                          getFirstAttrs(product.attributes)
                        ),
                        brand: product.brand,
                        name: product.name,
                        price: product.prices,
                        gallery: product.gallery,
                        attributes: getFirstAttrs(product.attributes),
                      })
                    }
                  >
                    <img src={cart} alt="add to cart button" />
                  </CartIcon>
                </ProductImage>
                <Link to={`/product/${product.id}`}>
                  {product.brand} {product.name}
                </Link>
                <ProductPrice prices={product.prices} />
              </Card>
            ))}
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default compose(
  connect(null, mapDispatchToProps),
  graphql(GET_CATEGORY_PRODUCTS, {
    options: (props) => ({
      variables: {
        input: { title: props.categoryName },
      },
    }),
  })
)(ProducstList);

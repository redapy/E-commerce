import { Component } from "react";
import { Link } from "react-router-dom";
//components
import ProductPrice from "../../components/productPrice/ProductPrice";
//Apollo and query
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORY_PRODUCTS } from "../../utils/queries";
//styles and icons
import { Card, CartIcon, Grid, ProductImage } from "./ProducstList.styles";
import cart from "../../assests/cartIcon.svg";

class ProducstList extends Component {
  render() {
    //destructer the variables from the data I get back from GraphQL
    const { loading, error, category } = this.props.data;

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
                  <CartIcon>
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

export default graphql(GET_CATEGORY_PRODUCTS, {
  options: (props) => ({
    variables: {
      input: { title: props.categoryName },
    },
  }),
})(ProducstList);

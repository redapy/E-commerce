import { Component } from "react";
// react-router
import { withRouter } from "react-router-dom";
//styles
import { Wrapper } from "./CategoryPage.styles";

class ProductsPage extends Component {
  render() {
    const categoryName = this.props.match.params.title;
    return (
      <Wrapper>
        <h1>{categoryName}</h1>
      </Wrapper>
    );
  }
}

export default withRouter(ProductsPage);

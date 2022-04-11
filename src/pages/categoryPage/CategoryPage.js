import { Component } from "react";
// react-router
import { withRouter } from "react-router-dom";
//components
import ProductsList from "./ProducstList";
//styles
import { Header, Wrapper } from "./CategoryPage.styles";

class CategoryPage extends Component {
  render() {
    const categoryName = this.props.match.params.title;
    return (
      <Wrapper>
        <Header>{categoryName}</Header>
        <ProductsList categoryName={categoryName} />
      </Wrapper>
    );
  }
}

export default withRouter(CategoryPage);

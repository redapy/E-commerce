import { Component } from "react";
//router
import { NavLink } from "react-router-dom";
//Apollo
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES } from "../../utils/queries";
//styles
import { Nav, NavLinks } from "./CategoryLinks.styles";

class CategoryLinks extends Component {
  render() {
    const { loading, error, categories } = this.props.data;
    return (
      <Nav>
        <NavLinks>
          {loading && <p>Loading...</p>}
          {error && <p>Something went wrong..</p>}
          {categories &&
            categories.map((category) => (
              <li key={category.name}>
                <NavLink to={`/categories/${category.name}`}>
                  {category.name}
                </NavLink>
              </li>
            ))}
        </NavLinks>
      </Nav>
    );
  }
}

export default graphql(GET_CATEGORIES)(CategoryLinks);

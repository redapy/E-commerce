import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
  query ($input: CategoryInput!) {
    category(input: $input) {
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
        attributes {
          id
          items {
            id
            value
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query ($id: String!) {
    product(id: $id) {
      brand
      name
      gallery
      description
      inStock
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
`;

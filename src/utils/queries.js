import { gql } from "@apollo/client";

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
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

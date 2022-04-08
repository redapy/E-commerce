import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(386px, 1fr));
  grid-auto-rows: 450px;
  grid-gap: 4rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  //set the opacity depending if a the product is in stock or not.
  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};

  p {
    font-size: 18px;
    font-weight: 500;
  }

  a {
    font-size: 18px;
    font-weight: 300;
    text-decoration: none;
    padding-bottom: 4px;
    color: var(--textColor);
  }
  //hover effect
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    //add inner shadow to the image container
    div:after {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
    //show the add to cart icon
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: auto;
  p {
    //center the "out of stock" text
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    //other css styles
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24px;
  }
  img {
    width: 100%;
    height: 340px;
    object-fit: contain;
  }
`;

export const CartIcon = styled.button`
  position: absolute;
  right: 5%;
  bottom: -26.5px;
  display: none;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: all 0.5;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const intiState = [];

const cartReducer = (state = intiState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addProductOrIncreaseQauntity(state, action.product);
    case "UPDATE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: action.product.quantity };
        }
        return item;
      });
    case "DELETE_PRODUCT":
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default cartReducer;

// function that check if product is already added to the cart, if so it will increase the quantity
const addProductOrIncreaseQauntity = (items, product) => {
  // create new array to not mutate the state directly
  const newArr = [...items];
  // get the index of the product, if it it doesn't it exist it will return -1
  const index = items.findIndex((item) => item.id === product.id);
  // if the product exist it will increase the quantity, otheriwse it will add the product
  if (index !== -1) {
    newArr[index].quantity += 1;
  } else {
    newArr.push(product);
  }
  return newArr;
};

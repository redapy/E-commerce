const intiState = [];

const cartReducer = (state = intiState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "UPDATE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: action.product.quantity };
        }
        return item;
      });
    default:
      return state;
  }
};

export default cartReducer;

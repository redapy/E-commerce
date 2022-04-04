const intiState = {
  items: [],
};

const cartReducer = (state = intiState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.product],
      };
    default:
      return state;
  }
};

export default cartReducer;

const intiState = {
  symbol: "$",
};

const currencyReducer = (state = intiState, action) => {
  if (action.type === "SELECT_CUREENCY") {
    return { ...state, symbol: action.symbol };
  } else {
    return state;
  }
};

export default currencyReducer;

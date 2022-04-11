// compute the total items in the cart
export const calculteQuantity = (items) => {
  return items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

//helper function to get the amout of a product depending on the currency selected
export const getAmount = (prices, currency) => {
  const amountArray = prices.filter((price) => {
    return price.currency.symbol === currency;
  });
  const amount = amountArray[0].amount;
  return amount;
};

// function that genrate a unique id, in case a user add the same product with different attributes
export const generateID = (id, attributes) => {
  // get the attributes values
  const attrValuesArray = Object.values(attributes);
  // concatenate the original id with the attributes values to get a new unique id
  const genereatedid = attrValuesArray.reduce((idString, attr) => {
    return idString + attr;
  }, id);
  return genereatedid;
};

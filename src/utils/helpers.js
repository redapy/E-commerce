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

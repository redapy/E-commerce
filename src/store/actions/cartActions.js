export const addProduct = (product) => {
  return { type: "ADD_PRODUCT", product };
};

export const updateQuantity = (quantity, id) => {
  return { type: "UPDATE_QUANTITY", payload: { quantity, id } };
};

export const deleteProduct = (id) => {
  return { type: "DELETE_PRODUCT", id };
};

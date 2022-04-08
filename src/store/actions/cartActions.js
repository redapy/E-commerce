export const addProduct = (product) => {
  return { type: "ADD_PRODUCT", product };
};

export const updateQuantity = (product) => {
  return { type: "UPDATE_QUANTITY", product };
};

export const deleteProduct = (id) => {
  return { type: "DELETE_PRODUCT", id };
};

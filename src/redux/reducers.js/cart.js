const initialState = { name: "Chi Nhan" };

const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case "add-item":
      return state;
    default:
      return state;
  }
};

export { cartItem };

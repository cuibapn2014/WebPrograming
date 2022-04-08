const initialState = [];

const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case "add-item":
      let check;
      if (state.length > 0) {
        check = state.find((e) => (e.id === action.payload.id ? true : false));
      }
      return check
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state, action.payload];

    case "remove-item":
      return state.filter((item) => item.id !== action.payload);
    case "change-qty":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export { cartItem };

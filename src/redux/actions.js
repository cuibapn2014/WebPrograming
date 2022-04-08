// statemenu

export const toogleIsMenu = () => {
  return {
    type: "toogle-menu",
  };
};

export const isTrueMenu = () => {
  return {
    type: "true-menu",
  };
};

export const isFalseMenu = () => {
  return {
    type: "false-menu",
  };
};

// statemenu

// cart
export const addCart = (item) => {
  return {
    type: "add-item",
    payload: item,
  };
};

export const removeCart = (id) => {
  return {
    type: "remove-item",
    payload: id,
  };
};

export const changeQty = (value) => {
  return {
    type: "change-qty",
    payload: value,
  };
};
// cart

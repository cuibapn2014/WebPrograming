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

//token
export const toogleRemember = () => {
  return {
    type: "toogle-remember",
  };
};

export const reRenderUser = (number) => {
  return {
    type: "re-render",
    payload: number,
  };
};

export const setEmailUser = (email) => {
  return {
    type: "add-email",
    payload: email,
  };
};
//token

//blockpage
export const blockLogin = (value) => {
  return {
    type: "block-login",
    payload: value,
  };
};

export const blockSignUp = (value) => {
  return {
    type: "block-sign-up",
    payload: value,
  };
};
//blockpage

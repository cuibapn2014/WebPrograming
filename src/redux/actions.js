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

export const setCodeForgot = (code) => {
  return {
    type: "add-code",
    payload: code,
  };
};

export const addTotalCart = (price) => {
  return {
    type: "add-total-cart",
    payload: price,
  };
};

export const addCodeVoucher = (voucher) => {
  return {
    type: "add-code-voucher",
    payload: voucher,
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

export const blockResetPassword = (value) => {
  return {
    type: "block-reset-password",
    payload: value,
  };
};

export const blockInputCode = (value) => {
  return {
    type: "block-input-code",
    payload: value,
  };
};

export const blockSetNewPassword = (value) => {
  return {
    type: "block-set-new-password",
    payload: value,
  };
};
//blockpage

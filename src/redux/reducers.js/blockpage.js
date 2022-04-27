const initialState = {
  signUp: JSON.parse(localStorage.getItem("blockSignUp")),
  // ? JSON.parse(localStorage.getItem("blockSignUp"))
  // : true,
  login: JSON.parse(localStorage.getItem("blockLogin")),
  // ? JSON.parse(localStorage.getItem("blockLogin"))
  // : true,
  resetPassword: JSON.parse(localStorage.getItem("blockResetPassWord"))
    ? JSON.parse(localStorage.getItem("blockResetPassWord"))
    : true,
  inputCode: JSON.parse(localStorage.getItem("blockInputCode"))
    ? JSON.parse(localStorage.getItem("blockInputCode"))
    : true,
  setNewPassword: JSON.parse(localStorage.getItem("blockSetNewPassword"))
    ? JSON.parse(localStorage.getItem("blockSetNewPassword"))
    : true,
};

const blockPage = (state = initialState, action) => {
  switch (action.type) {
    case "block-login":
      const blockLogin = action.payload;
      localStorage.setItem("blockLogin", blockLogin);
      return {
        ...state,
        login: blockLogin,
      };

    case "block-sign-up":
      const blockSignUp = action.payload;
      localStorage.setItem("blockSignUp", blockSignUp);

      return {
        ...state,
        signUp: blockSignUp,
      };
    case "block-reset-password":
      const blockResetPassword = action.payload;
      localStorage.setItem("blockResetPassWord", blockResetPassword);

      return {
        ...state,
        resetPassword: blockResetPassword,
      };
    case "block-input-code":
      const blockInputCode = action.payload;
      localStorage.setItem("blockInputCode", blockInputCode);

      return {
        ...state,
        inputCode: blockInputCode,
      };
    case "block-set-new-password":
      const blockSetNewPassword = action.payload;
      localStorage.setItem("blockSetNewPassword", blockSetNewPassword);

      return {
        ...state,
        setNewPassword: blockSetNewPassword,
      };

    default:
      return state;
  }
};

export default blockPage;

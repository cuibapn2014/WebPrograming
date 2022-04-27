const initialState = {
  signUp: JSON.parse(localStorage.getItem("blockSignUp")),
  login: JSON.parse(localStorage.getItem("blockLogin")),
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

    default:
      return state;
  }
};

export default blockPage;

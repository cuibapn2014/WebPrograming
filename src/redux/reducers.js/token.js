const initialState = {
  tokenDefault:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTY1MTUwNjk4Nn0.5qZD-Ht_kae0hznTEv7ILq49bEdk0iVPu2D2LGTlPrc",
  rememberMe: JSON.parse(localStorage.getItem("isChecked")),
  reRenderUser: 0,
  emailForgot: "",
};

const token = (state = initialState, action) => {
  switch (action.type) {
    case "toogle-remember":
      const isChecked = !state.rememberMe;
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      return {
        ...state,
        rememberMe: isChecked,
      };
    case "re-render":
      return {
        ...state,
        reRenderUser: action.payload,
      };
    case "add-email":
      return {
        ...state,
        emailForgot: action.payload,
      };

    default:
      return state;
  }
};

export default token;

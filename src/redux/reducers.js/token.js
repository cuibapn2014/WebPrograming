const initialState = {
  tokenDefault:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aG9tYXMiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY1MDU1MDMxNH0.5bR9B8bYRGcT9-KVQbRfjlhS0-3vnhbUrUAxvlrpdYo",
  rememberMe: JSON.parse(localStorage.getItem("isChecked")),
  reRenderUser: 0,
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

    default:
      return state;
  }
};

export default token;

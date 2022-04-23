const initialState = {
  tokenDefault:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTY1MTMyOTQ3MX0.SA0ocVCOK7pXmlUi5ZeAj2Vz4gpL4t1IYoVGeFMVb64",
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

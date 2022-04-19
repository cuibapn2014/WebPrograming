const initialState = { isMenu: JSON.parse(localStorage.getItem("stateMenu")) };

const stateMenu = (state = initialState, action) => {
  switch (action.type) {
    case "toogle-menu":
      const temp = !state.isMenu;
      localStorage.setItem("stateMenu", temp);
      return {
        isMenu: temp,
      };
    case "true-menu":
      localStorage.setItem("stateMenu", true);
      return {
        isMenu: true,
      };
    case "false-menu":
      localStorage.setItem("stateMenu", false);
      return {
        isMenu: false,
      };
    default:
      return state;
  }
};

export default stateMenu;

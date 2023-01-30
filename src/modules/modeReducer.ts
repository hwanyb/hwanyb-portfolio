const SET_IS_DARK_MODE = "modeReducer/SET_IS_DARK_MODE" as const;

export const setIsDarkMode = () => ({
  type: SET_IS_DARK_MODE,
});

type ModeAction = ReturnType<typeof setIsDarkMode>;

type ModeState = {
  isDarkMode: boolean;
};

const darkMode: string | null = localStorage.getItem("darkMode");
const isDarkMode: boolean = darkMode !== null ? JSON.parse(darkMode) : false;

const initialState: ModeState = {
    isDarkMode: isDarkMode
};
function modeReducer(
  state: ModeState = initialState,
  action: ModeAction,
): ModeState {
  switch (action.type) {
    case SET_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
}
export default modeReducer;

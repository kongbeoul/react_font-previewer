const CHANGE_FONT = "CHANGE_FONT";
const CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE";

export const changeFontSize = size => ({
  type: CHANGE_FONT_SIZE,
  size
});

export const changeFont = font => ({
  type: CHANGE_FONT,
  font
});

const initialState = {
  font: "",
  size: 36
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FONT:
      return {
        ...state,
        font: action.font
      };
    case CHANGE_FONT_SIZE:
      return {
        ...state,
        size: action.size
      };
    default:
      return state;
  }
};

export default reducer;

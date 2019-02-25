const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TODOS":
      return action.tweets;
    default:
      return state;
  }
};

export default reducer;

const defaultState = null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case "select_library" :
      return action.payload;
    default:
      return state;
  }
  console.log(action)
  return null;
}

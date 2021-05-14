const newTaskReducer = (state = '', action) => {
  switch(action.type) {
    case 'NEW_TASK':
      return action.payload;
    default:
      return state
  }
}
export default newTaskReducer
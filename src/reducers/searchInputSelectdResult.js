const INITIAL_STATE = -1

const searchInputSelectedResult = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SEARCH_INPUT_SELECTED_RESULT':
      return action.payload
    default:
      return state
  }
}

export default searchInputSelectedResult

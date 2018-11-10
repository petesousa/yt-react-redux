const INITIAL_STATE = false

const searchInputResultsDisplay = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SEARCH_INPUT_RESULTS_DISPLAY':
      return action.payload
    default:
      return state
  }
}

export default searchInputResultsDisplay

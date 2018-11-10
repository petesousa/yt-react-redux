const INITIAL_STATE = {
  term: ''
}

const searchInputLastTerm = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SEARCH_INPUT_LAST_TERM':
      return {
        term: action.payload
      }
    default:
      return state
  }
}

export default searchInputLastTerm

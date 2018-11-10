const INITIAL_STATE = {
  term: ''
}

const searchInputTerm = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SEARCH_INPUT_TERM':
      return {
        term: action.payload
      }
    default:
      return state
  }
}

export default searchInputTerm

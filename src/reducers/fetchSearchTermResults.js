const INITIAL_STATE = {
  isFetching: true,
  term: '',
  data: [],
  error: false
}

const fetchSearchTermResults = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'FETCH_SEARCH_TERM_REQUEST':
      return {
        isFetching: true,
        term: action.payload,
        data: [],
        error: false
      }
    case 'FETCH_SEARCH_TERM_SUCCESS':
      return {
        isFetching: false,
        term: '',
        data: action.payload,
        error: false
      }
    case 'FETCH_SEARCH_TERM_FAILURE':
      return {
        isFetching: false,
        term: '',
        data: [],
        error: true
      }
    default:
      return state
  }
}

export default fetchSearchTermResults

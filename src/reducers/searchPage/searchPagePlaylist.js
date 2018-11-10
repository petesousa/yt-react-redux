const INITIAL_STATE = {
  isFetching: true,
  term: '',
  data: [],
  error: false
}

const searchPagePlaylist = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SUBMIT_SEARCH_PLAYLIST_REQUEST':
      return {
        isFetching: true,
        term: action.payload,
        data: [],
        error: false
      }
    case 'SUBMIT_SEARCH_PLAYLIST_SUCCESS':
      return {
        isFetching: false,
        term: '',
        data: action.payload,
        error: false
      }
    case 'SUBMIT_SEARCH_PLAYLIST_FAILURE':
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

export default searchPagePlaylist

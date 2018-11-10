const INITIAL_STATE = {
  isFetching: true,
  term: '',
  data: [],
  error: false
}

const searchPageVideos = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SUBMIT_SEARCH_VIDEOS_REQUEST':
      return {
        isFetching: true,
        term: action.payload,
        data: [],
        error: false
      }
    case 'SUBMIT_SEARCH_VIDEOS_SUCCESS':
      return {
        isFetching: false,
        term: '',
        data: action.payload,
        error: false
      }
    case 'SUBMIT_SEARCH_VIDEOS_FAILURE':
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

export default searchPageVideos

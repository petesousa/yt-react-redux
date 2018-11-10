const INITIAL_STATE = {
  isFetching: true,
  playlistsIds: [],
  data: [],
  error: false
}

const homePage = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HOME_PAGE_REQUEST':
      return {
        isFetching: true,
        playlistsIds: action.payload,
        data: [],
        error: false
      }
    case 'HOME_PAGE_SUCCESS':
      return {
        isFetching: false,
        playlistsIds: '',
        data: action.payload,
        error: false
      }
    case 'HOME_PAGE_FAILURE':
      return {
        isFetching: false,
        playlistsIds: '',
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default homePage

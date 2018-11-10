const INITIAL_STATE = {
  isFetching: true,
  playlistsIds: [],
  data: [],
  error: false
}

const homePagePlaylists = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HOME_PAGE_PLAYLISTS_REQUEST':
      return {
        isFetching: true,
        playlistsIds: action.payload,
        data: [],
        error: false
      }
    case 'HOME_PAGE_PLAYLISTS_SUCCESS':
      return {
        isFetching: false,
        playlistsIds: '',
        data: action.payload,
        error: false
      }
    case 'HOME_PAGE_PLAYLISTS_FAILURE':
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

export default homePagePlaylists

const INITIAL_STATE = {
  isFetching: true,
  channelId: '',
  data: [],
  error: false
}

const channelPagePlaylists = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANNEL_PAGE_PLAYLISTS_REQUEST':
      return {
        isFetching: true,
        channelId: action.payload,
        data: [],
        error: false
      }
    case 'CHANNEL_PAGE_PLAYLISTS_SUCCESS':
      return {
        isFetching: false,
        channelId: '',
        data: action.payload,
        error: false
      }
    case 'CHANNEL_PAGE_PLAYLISTS_FAILURE':
      return {
        isFetching: false,
        channelId: '',
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default channelPagePlaylists

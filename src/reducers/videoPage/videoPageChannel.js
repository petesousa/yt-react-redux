const INITIAL_STATE = {
  isFetching: true,
  videoId: '',
  data: [],
  error: false
}

const videoPageChannel = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'VIDEO_PAGE_CHANNEL_REQUEST':
      return {
        isFetching: true,
        videoId: action.payload,
        data: [],
        error: false
      }
    case 'VIDEO_PAGE_CHANNEL_SUCCESS':
      return {
        isFetching: false,
        videoId: '',
        data: action.payload,
        error: false
      }
    case 'VIDEO_PAGE_CHANNEL_FAILURE':
      return {
        isFetching: false,
        videoId: '',
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default videoPageChannel

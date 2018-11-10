const INITIAL_STATE = {
  isFetching: true,
  videoId: '',
  data: [],
  error: false
}

const videoPage = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'VIDEO_PAGE_REQUEST':
      return {
        isFetching: true,
        videoId: action.payload,
        data: [],
        error: false
      }
    case 'VIDEO_PAGE_SUCCESS':
      return {
        isFetching: false,
        videoId: '',
        data: action.payload,
        error: false
      }
    case 'VIDEO_PAGE_FAILURE':
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

export default videoPage

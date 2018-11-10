const INITIAL_STATE = {
  isFetching: true,
  channelId: '',
  data: [],
  error: false
}

const channelPage = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANNEL_PAGE_REQUEST':
      return {
        isFetching: true,
        channelId: action.payload,
        data: [],
        error: false
      }
    case 'CHANNEL_PAGE_SUCCESS':
      return {
        isFetching: false,
        channelId: '',
        data: action.payload,
        error: false
      }
    case 'CHANNEL_PAGE_FAILURE':
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

export default channelPage


export const setSearchInputTerm = (term) => {
  return {
    type: 'SET_SEARCH_INPUT_TERM',
    payload: term
  }
}

export const setSearchInputLastTerm = (term) => {
  return {
    type: 'SET_SEARCH_INPUT_LAST_TERM',
    payload: term
  }
}

export const setSearchInputResultsDisplay = (bool) => {
  return {
    type: 'SET_SEARCH_INPUT_RESULTS_DISPLAY',
    payload: bool
  }
}

export const setSearchInputSelectedResult = (index) => {
  return {
    type: 'SET_SEARCH_INPUT_SELECTED_RESULT',
    payload: index
  }
}

export const fetchSearchTermRequest = (term) => {
  return {
    type: 'FETCH_SEARCH_TERM_REQUEST',
    payload: term
  }
}

export const fetchSearchTermSuccess = (data) => {
  return {
    type: 'FETCH_SEARCH_TERM_SUCCESS',
    payload: data
  }
}

export const submitSearchRequest = (term) => {
  return {
    type: 'SUBMIT_SEARCH_REQUEST',
    payload: term
  }
}

export const submitSearchVideosRequest = (term) => {
  return {
    type: 'SUBMIT_SEARCH_VIDEOS_REQUEST',
    payload: term
  }
}

export const submitSearchVideosSuccess = (data) => {
  return {
    type: 'SUBMIT_SEARCH_VIDEOS_SUCCESS',
    payload: data
  }
}

export const submitSearchChannelRequest = (term) => {
  return {
    type: 'SUBMIT_SEARCH_CHANNEL_REQUEST',
    payload: term
  }
}

export const submitSearchChannelSuccess = (data) => {
  return {
    type: 'SUBMIT_SEARCH_CHANNEL_SUCCESS',
    payload: data
  }
}

export const submitSearchPlaylistRequest = (term) => {
  return {
    type: 'SUBMIT_SEARCH_PLAYLIST_REQUEST',
    payload: term
  }
}

export const submitSearchPlaylistSuccess = (data) => {
  return {
    type: 'SUBMIT_SEARCH_PLAYLIST_SUCCESS',
    payload: data
  }
}

export const videoPageRequest = (videoId) => {
  return {
    type: 'VIDEO_PAGE_REQUEST',
    payload: videoId
  }
}

export const videoPageSuccess = (data) => {
  return {
    type: 'VIDEO_PAGE_SUCCESS',
    payload: data
  }
}

export const videoPageChannelRequest = (channelId) => {
  return {
    type: 'VIDEO_PAGE_CHANNEL_REQUEST',
    payload: channelId
  }
}

export const videoPageChannelSuccess = (data) => {
  return {
    type: 'VIDEO_PAGE_CHANNEL_SUCCESS',
    payload: data
  }
}

export const videoPageCategoryRequest = (categoryId) => {
  return {
    type: 'VIDEO_PAGE_CATEGORY_REQUEST',
    payload: categoryId
  }
}

export const videoPageCategorySuccess = (data) => {
  return {
    type: 'VIDEO_PAGE_CATEGORY_SUCCESS',
    payload: data
  }
}

export const videoPageRelatedVideosRequest = (videoId) => {
  return {
    type: 'VIDEO_PAGE_RELATED_VIDEOS_REQUEST',
    payload: videoId
  }
}

export const videoPageRelatedVideosSuccess = (data) => {
  return {
    type: 'VIDEO_PAGE_RELATED_VIDEOS_SUCCESS',
    payload: data
  }
}

export const channelPageRequest = (channelId) => {
  return {
    type: 'CHANNEL_PAGE_REQUEST',
    payload: channelId
  }
}

export const channelPageSuccess = (data) => {
  return {
    type: 'CHANNEL_PAGE_SUCCESS',
    payload: data
  }
}

export const channelPagePlaylistsRequest = (channelId) => {
  return {
    type: 'CHANNEL_PAGE_PLAYLISTS_REQUEST',
    payload: channelId
  }
}

export const channelPagePlaylistsSuccess = (data) => {
  return {
    type: 'CHANNEL_PAGE_PLAYLISTS_SUCCESS',
    payload: data
  }
}

export const channelPageVideostsRequest = (channelId) => {
  return {
    type: 'CHANNEL_PAGE_VIDEOS_REQUEST',
    payload: channelId
  }
}

export const channelPageVideostsSuccess = (data) => {
  return {
    type: 'CHANNEL_PAGE_VIDEOS_SUCCESS',
    payload: data
  }
}

export const homePageRequest = (playlistIds) => {
  return {
    type: 'HOME_PAGE_REQUEST',
    payload: playlistIds
  }
}

export const homePageSuccess = (data) => {
  return {
    type: 'HOME_PAGE_SUCCESS',
    payload: data
  }
}

export const homePagePlaylistsRequest = (playlistIds) => {
  return {
    type: 'HOME_PAGE_PLAYLISTS_REQUEST',
    payload: playlistIds
  }
}

export const homePagePlaylistsSuccess = (data) => {
  return {
    type: 'HOME_PAGE_PLAYLISTS_SUCCESS',
    payload: data
  }
}

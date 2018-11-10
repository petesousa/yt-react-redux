import { put, call } from 'redux-saga/effects'

import { submitSearchPlaylistSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const SEARCH_URL = `${BASE_URL}/search?key=${API_KEY}`
const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}`
const PLAYLIST_ITEMS_URL = `${BASE_URL}/playlistItems?key=${API_KEY}`

function *submitSearch(axios, action) {
  const term = action.payload
  const playlistSearchUrl = `${SEARCH_URL}`
    + `&type=playlist`
    + `&q=${term}`
    + `&part=snippet,id`
    + `&maxResults=1`
  const playlistSearchResults = yield call(axios.get, playlistSearchUrl)
  const playlistObject = playlistSearchResults.data.items[0]
  const playlistId = playlistObject.id.playlistId
  const playlistItemsUrl = `${PLAYLIST_ITEMS_URL}`
    + `&playlistId=${playlistId}`
    + `&part=snippet,id`
    + `&maxResults=50`
  const playlistItemsSearchResults = yield call(axios.get, playlistItemsUrl)
  const playlistVideoIds = playlistItemsSearchResults.data.items.map((video) => {
    return video.snippet.resourceId.videoId
  })
  const playlistVideosIdsUrl = `${VIDEO_URL}`
    + `&id=${playlistVideoIds}`
    + `&part=snippet,id,statistics,contentDetails`
    + `&maxResults=50`
  const playlistVideosMetaDataResults = yield call(axios.get, playlistVideosIdsUrl)
  const playlist = {
    playlist: playlistObject,
    items: playlistVideosMetaDataResults.data.items
  }

  yield put(submitSearchPlaylistSuccess(playlist))
}

export default submitSearch

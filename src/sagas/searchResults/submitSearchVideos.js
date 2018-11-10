import { put, call } from 'redux-saga/effects'

import { submitSearchVideosSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const SEARCH_URL = `${BASE_URL}/search?key=${API_KEY}`
const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}`

function *submitSearch(axios, action) {
  const term = action.payload
  const videosUrl = `${SEARCH_URL}`
    + `&type=video`
    + `&q=${term}`
    + `&part=snippet,id`
    + `&maxResults=50`
  const videoSearchResults = yield call(axios.get, videosUrl)
  const videoIds = videoSearchResults.data.items.map((video) => {
    return video.id.videoId
  })
  const videoIdsUrl = `${VIDEO_URL}`
    + `&id=${videoIds}`
    + `&part=snippet,id,statistics`
    + `&maxResults=50`
  const videosMetaDataResults = yield call(axios.get, videoIdsUrl)
  const videos = videosMetaDataResults.data.items

  yield put(submitSearchVideosSuccess(videos))
}

export default submitSearch

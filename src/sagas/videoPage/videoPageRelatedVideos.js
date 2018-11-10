import { put, call } from 'redux-saga/effects'

import { videoPageRelatedVideosSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const SEARCH_URL = `${BASE_URL}/search?key=${API_KEY}`
const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}`

function *videoPage(axios, action) {

  const videoId = action.payload
  const relatedVideosUrl = `${SEARCH_URL}`
    + `&type=video`
    + `&relatedToVideoId=${videoId}`
    + `&part=id,snippet`
    + `&maxResults=24`
  const fetchRelatedVideosResponse = yield call(axios.get, relatedVideosUrl)
  const relatedVideosIds = fetchRelatedVideosResponse.data.items.map(item => {
    return item.id.videoId
  })
  const relatedVideosIdLotUrl = `${VIDEO_URL}`
    + `&id=${relatedVideosIds}`
    + `&part=id,snippet,statistics`
    + `&maxResults=24`
  const fetchRelatedVideosMetaDataResponse = yield call(axios.get, relatedVideosIdLotUrl)
  const relatedVideos = fetchRelatedVideosMetaDataResponse.data.items

  yield put(videoPageRelatedVideosSuccess(relatedVideos))
}

export default videoPage

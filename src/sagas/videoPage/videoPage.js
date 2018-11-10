import { put, call } from 'redux-saga/effects'

import { videoPageSuccess } from '../../actions/actions'
import { videoPageChannelRequest } from '../../actions/actions'
import { videoPageCategoryRequest } from '../../actions/actions'
import { videoPageRelatedVideosRequest } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}`

function *videoPage(axios, action) {

  const videoId = action.payload
  const videoUrl = `${VIDEO_URL}`
    + `&id=${videoId}`
    + `&part=id,snippet,statistics`
    + `&maxResults=1`
  const fetchVideoResponse = yield call(axios.get, videoUrl)
  const video = fetchVideoResponse.data.items[0]
  const { channelId } = video.snippet
  const { categoryId } = video.snippet

  yield put(videoPageChannelRequest(channelId))
  yield put(videoPageCategoryRequest(categoryId))
  yield put(videoPageRelatedVideosRequest(videoId))
  yield put(videoPageSuccess(video))
}

export default videoPage

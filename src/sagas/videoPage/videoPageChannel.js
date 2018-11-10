import { put, call } from 'redux-saga/effects'

import { videoPageChannelSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const CHANNEL_URL = `${BASE_URL}/channels?key=${API_KEY}`

function *videoPage(axios, action) {

  const channelId = action.payload

  const channelUrl = `${CHANNEL_URL}`
    + `&id=${channelId}`
    + `&part=id,snippet,statistics`
    + `&maxResults=1`
  const fetchChannelResponse = yield call(axios.get, channelUrl)
  const channel = fetchChannelResponse.data.items[0]

  yield put(videoPageChannelSuccess(channel))
}

export default videoPage

import { put, call } from 'redux-saga/effects'

import { channelPagePlaylistsRequest } from '../../actions/actions'

import { channelPageSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_YT_CHANNEL_URL = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}`;

function *channelPage(axios, action) {
  const channelId = action.payload
  const channelUrl = `${BASE_YT_CHANNEL_URL}`
    + `&id=${channelId}`
    + `&part=id,snippet,statistics,brandingSettings`
    + `&maxResults=1`
  const fetchChannelResponse = yield call(axios.get, channelUrl)
  const channelPage = fetchChannelResponse.data.items[0]

  yield put(channelPagePlaylistsRequest(channelPage.id))
  yield put(channelPageSuccess(channelPage))
}

export default channelPage

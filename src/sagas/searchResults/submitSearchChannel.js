import { put, call } from 'redux-saga/effects'

import { submitSearchChannelSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const SEARCH_URL = `${BASE_URL}/search?key=${API_KEY}`
const CHANNEL_URL = `${BASE_URL}/channels?key=${API_KEY}`

function *submitSearch(axios, action) {
  const term = action.payload

  const channelUrl = `${SEARCH_URL}`
    + `&type=channel`
    + `&q=${term}`
    + `&part=snippet,id`
    + `&maxResults=1`
  const channelSearchResults = yield call(axios.get, channelUrl)
  const channelId = channelSearchResults.data.items[0].id.channelId
  const channelMetaDataUrl = `${CHANNEL_URL}`
    + `&id=${channelId}`
    + `&part=snippet,id,statistics`
    + `&maxResults=1`
  const channelMetaDataResult = yield call(axios.get, channelMetaDataUrl)
  const channel = channelMetaDataResult.data.items[0]

  yield put(submitSearchChannelSuccess(channel))
}

export default submitSearch

import { put, call } from 'redux-saga/effects'

import { fetchSearchTermSuccess } from '../actions/actions'

import credentials from './ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const SEARCH_URL = `${BASE_URL}/search?key=${API_KEY}`

function *fetchSearchInputTerm(axios, action) {
  const url = `${SEARCH_URL}`
    + `&type=video`
    + `&q=${action.payload}`
    + `&part=snippet,id`
    + `&maxResults=10`
  const data = yield call(axios.get, url)
  yield put(fetchSearchTermSuccess(data.data.items))
}

export default fetchSearchInputTerm

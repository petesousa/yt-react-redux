import { put, call } from 'redux-saga/effects'

import { videoPageCategorySuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const CATEGORY_URL = `${BASE_URL}/videoCategories?key=${API_KEY}`

function *videoPage(axios, action) {

  const categoryId = action.payload
  const categoryUrl = `${CATEGORY_URL}`
    + `&id=${categoryId}`
    + `&part=snippet`
    + `&maxResults=1`
  const fetchCategoryResponse = yield call(axios.get, categoryUrl)
  const category = fetchCategoryResponse.data.items[0]

  yield put(videoPageCategorySuccess(category))
}

export default videoPage

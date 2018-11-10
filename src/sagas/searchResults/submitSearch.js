import { put } from 'redux-saga/effects'

import { submitSearchVideosRequest } from '../../actions/actions'
import { submitSearchChannelRequest } from '../../actions/actions'
import { submitSearchPlaylistRequest } from '../../actions/actions'

function *submitSearch(axios, action) {
  const term = action.payload

  yield put(submitSearchVideosRequest(term))
  yield put(submitSearchChannelRequest(term))
  yield put(submitSearchPlaylistRequest(term))
}

export default submitSearch

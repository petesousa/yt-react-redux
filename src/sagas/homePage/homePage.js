import { put } from 'redux-saga/effects'

import { homePagePlaylistsRequest } from '../../actions/actions'
import { homePageSuccess } from '../../actions/actions'

function *channelPage(axios, action) {
  const playlistIds = action.payload

  yield put(homePagePlaylistsRequest(playlistIds))
  yield put(homePageSuccess(channelPage))
}

export default channelPage

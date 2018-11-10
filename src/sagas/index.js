import { takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import fetchSearchInputTerm from './fetchSearchInputTerm'
import submitSearch from './searchResults/submitSearch'
import submitSearchVideos from './searchResults/submitSearchVideos'
import submitSearchChannel from './searchResults/submitSearchChannel'
import submitSearchPlaylist from './searchResults/submitSearchPlaylist'

import videoPage from './videoPage/videoPage'
import videoPageChannel from './videoPage/videoPageChannel'
import videoPageCategory from './videoPage/videoPageCategory'
import videoPageRelatedVideos from './videoPage/videoPageRelatedVideos'

import channelPage from './channelPage/channelPage'
import channelPagePlaylists from './channelPage/channelPagePlaylists'

import homePage from './homePage/homePage'
import homePagePlaylists from './homePage/homePagePlaylists'

function *index() {
  yield takeLatest('FETCH_SEARCH_TERM_REQUEST', fetchSearchInputTerm, axios)
  yield takeLatest('SUBMIT_SEARCH_REQUEST', submitSearch, axios)
  yield takeLatest('SUBMIT_SEARCH_VIDEOS_REQUEST', submitSearchVideos, axios)
  yield takeLatest('SUBMIT_SEARCH_CHANNEL_REQUEST', submitSearchChannel, axios)
  yield takeLatest('SUBMIT_SEARCH_PLAYLIST_REQUEST', submitSearchPlaylist, axios)
  yield takeLatest('HOME_PAGE_REQUEST', homePage, axios)
  yield takeLatest('HOME_PAGE_PLAYLISTS_REQUEST', homePagePlaylists, axios)
  yield takeLatest('CHANNEL_PAGE_REQUEST', channelPage, axios)
  yield takeLatest('CHANNEL_PAGE_PLAYLISTS_REQUEST', channelPagePlaylists, axios)
  yield takeLatest('VIDEO_PAGE_REQUEST', videoPage, axios)
  yield takeLatest('VIDEO_PAGE_CHANNEL_REQUEST', videoPageChannel, axios)
  yield takeLatest('VIDEO_PAGE_CATEGORY_REQUEST', videoPageCategory, axios)
  yield takeLatest('VIDEO_PAGE_RELATED_VIDEOS_REQUEST', videoPageRelatedVideos, axios)
}

export default index

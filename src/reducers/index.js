import { combineReducers } from 'redux'

import searchInputTerm from './searchInputTerm'
import searchInputLastTerm from './searchInputLastTerm'
import fetchSearchTermResults from './fetchSearchTermResults'
import searchInputResultsDisplay from './searchInputResultsDisplay'
import searchInputSelectedResult from './searchInputSelectdResult'

import searchPageVideos from './searchPage/searchPageVideos'
import searchPageChannel from './searchPage/searchPageChannel'
import searchPagePlaylist from './searchPage/searchPagePlaylist'

import homePage from './homePage/homePage'
import homePagePlaylists from './homePage/homePagePlaylists'

import videoPage from './videoPage/videoPage'
import videoPageChannel from './videoPage/videoPageChannel'
import videoPageCategory from './videoPage/videoPageCategory'
import videoPageRelatedVideos from './videoPage/videoPageRelatedVideos'

import channelPage from './channelPage/channelPage'
import channelPagePlaylists from './channelPage/channelPagePlaylists'
import channelPageVideos from './channelPage/channelPageVideos'

export default combineReducers({
  searchInputTerm,
  searchInputLastTerm,
  fetchSearchTermResults,
  searchInputResultsDisplay,
  searchInputSelectedResult,
  searchPageVideos,
  searchPageChannel,
  searchPagePlaylist,
  homePage,
  homePagePlaylists,
  channelPage,
  channelPageVideos,
  channelPagePlaylists,
  videoPage,
  videoPageChannel,
  videoPageCategory,
  videoPageRelatedVideos
})

import { put, call } from 'redux-saga/effects'

import { homePagePlaylistsSuccess } from '../../actions/actions'

import credentials from '../ytApi'

const API_KEY = credentials.apiKey
const BASE_YT_VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}`;
const BASE_YT_PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}`;
const BASE_YT_PLAYLIST_ITEMS_URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}`;

function *channelPagePlaylists(axios, action) {
  const playlistsIds = action.payload

  const playlistsUrl = `${BASE_YT_PLAYLIST_URL}`
    + `&id=${playlistsIds}`
    + `&part=id,snippet`
    + `&maxResults=5`

  const fetchPlaylistsResponse = yield call(axios.get, playlistsUrl)
  const playlistsList = fetchPlaylistsResponse.data.items

  const playlists = []
  for (const playlist of playlistsList) {
    const playlistVideosUrl = `${BASE_YT_PLAYLIST_ITEMS_URL}`
      + `&playlistId=${playlist.id}`
      + `&part=id,snippet`
      + `&maxResults=50`

    const fetchPlaylistVideosResponse = yield call(axios.get, playlistVideosUrl)
    const playlistVideos = fetchPlaylistVideosResponse.data.items
    const videosIds = playlistVideos.map(video => {
      return video.snippet.resourceId.videoId
    })
    const videosIdsLotUrl = `${BASE_YT_VIDEO_URL}`
      + `&id=${videosIds}`
      + `&part=snippet,id,statistics,contentDetails`
      + `&maxResults=50`
    const fetchVideosMetaDataResponse = yield call(axios.get, videosIdsLotUrl)
    const videos = fetchVideosMetaDataResponse.data.items

    playlists.push({ playlist, videos })
  }

  yield put(homePagePlaylistsSuccess(playlists))
}

export default channelPagePlaylists

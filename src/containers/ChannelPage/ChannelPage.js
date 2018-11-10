import React, {Component} from 'react'
import { connect } from 'react-redux'

import { channelPageRequest } from '../../actions/actions'

import Loading from '../../components/Loading/Loading'
import ChannelLoading from './ChannelLoading'
import VideoPanelLoading from '../../components/VideoPanel/VideoPanelLoading'

import ChannelCard from '../../components/ChannelCard/ChannelCard'
import VideoPanel from '../../components/VideoPanel/VideoPanel'

import styles from './ChannelPage.module.css'

class ChannelPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.channelPageRequest(this.props.channelId)
  }

  componentDidUpdate() { window.scrollTo(0, 0) }

  renderChannelHeader = (channel) => {
    return (
      <header className={styles.channelHeader}>
        <img
          className={styles.channelBannerImage}
          alt={channel.snippet.title}
          src={channel.brandingSettings.image.bannerImageUrl} />
        <div className={styles.channelCardWrapper}>
          <ChannelCard
            channel={channel}
            avatarSize="Medium"
            mode="Header" />
        </div>
      </header>
    )
  }

  renderPlaylists = (playlists) => {
    return playlists.map((playlist) => {
      return (
        <section
          key={playlist.playlist.id}
          className={styles.channelPagePlaylistWrapper}>
          <h1 className={styles.playlistTitle}>{playlist.playlist.snippet.title}</h1>
          <VideoPanel videoList={playlist.videos} />
        </section>
      );
    });
  }

  pageLoading = (fetchingChannel, fetchingPlaylists) => {
    if (fetchingChannel || fetchingPlaylists) {
      return true
    }
    return false
  }

  render() {

    const fetchingChannel = this.props.channelPage.isFetching
    const fetchingPlaylists = this.props.channelPagePlaylists.isFetching

    const channel = this.props.channelPage.data
    const playlists = this.props.channelPagePlaylists.data

    return (
      <div className={styles.channel}>
        { this.pageLoading(fetchingChannel, fetchingPlaylists) && <Loading /> }
        { fetchingChannel && <ChannelLoading /> }
        { !fetchingChannel && this.renderChannelHeader(channel) }
        <main className={styles.channelBody}>
          { fetchingPlaylists && <VideoPanelLoading /> }
          { !fetchingPlaylists && this.renderPlaylists(playlists) }
        </main>
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    channelId: ownProps.match.params.channelId,
    channelPage: state.channelPage,
    channelPagePlaylists: state.channelPagePlaylists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    channelPageRequest: (channelId) => dispatch(channelPageRequest(channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)

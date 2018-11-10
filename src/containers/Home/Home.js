import React, { Component } from 'react'
import { connect } from 'react-redux'

import { homePageRequest } from '../../actions/actions'

import Loading from '../../components/Loading/Loading'
import VideoPanelLoading from '../../components/VideoPanel/VideoPanelLoading'

import HomeAd from '../../components/HomeAd/HomeAd'
import Disclaimer from './Disclaimer'
import VideoPanel from '../../components/VideoPanel/VideoPanel'

import styles from './Home.module.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playlistsIds: [
        'PL0PwxJm2JWCRdZ41OofKKAVGTbuJ8lbnd',
        'PLt7bG0K25iXjvB28Upp4YU_LvLS2MFbLr',
        'PLrjzGRNmGxoyCCqs6J9irAVqyEIqeHkLA',
        'PL6NdkXsPL07KN01gH2vucrHCEyyNmVEx4',
        'PLKQ21UZVk6Qv10XWE40USgBz0pC6QLSPW'
      ]
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.homePageRequest(this.state.playlistsIds)
  }
  componentDidUpdate() { window.scrollTo(0, 0) }

  renderPlaylists = (playlists) => {
    return playlists.map((playlist) => {
      return (
        <section
          key={playlist.playlist.id}
          className={styles.homePagePlaylistWrapper}>
          <h1 className={styles.playlistTitle}>{playlist.playlist.snippet.title}</h1>
          <VideoPanel videoList={playlist.videos} />
        </section>
      );
    });
  }

  render() {
    const playlists = this.props.homePagePlaylists
    return (
      <div className={styles.home}>
        <HomeAd />
        <Disclaimer />
        <main className={styles.homePageBody}>
          { playlists.isFetching && <Loading /> }
          { playlists.isFetching && <VideoPanelLoading /> }
          { !playlists.isFetching && this.renderPlaylists(playlists.data)}
        </main>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    homePage: state.homePage,
    homePagePlaylists: state.homePagePlaylists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homePageRequest: (playlistsIds) => dispatch(homePageRequest(playlistsIds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

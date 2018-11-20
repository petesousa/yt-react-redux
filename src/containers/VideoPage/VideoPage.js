import React, { Component } from 'react'
import { connect } from 'react-redux'

import { videoPageRequest } from '../../actions/actions'

import Loading from '../../components/Loading/Loading'
import VideoListLoading from '../../components/VideoList/VideoListLoading'

import VideoDetail from '../../components/VideoDetail/VideoDetail'
import VideoList from '../../components/VideoList/VideoList'

import styles from './VideoPage.module.css'

class VideoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastVideoId: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.setState({lastVideoId: this.props.videoId})
    this.loadVideoData()
  }

  componentDidUpdate() {
    if (this.props.videoId !== this.state.lastVideoId) {
      this.setState({lastVideoId: this.props.videoId})
      window.scrollTo(0, 0)
      this.loadVideoData()
    }
  }

  loadVideoData = () => {
    this.props.watchVideoRequest(this.props.videoId)
  }

  renderVideoDetail = () => {
    return (
      <VideoDetail
        videoPage={this.props.videoPage}
        videoPageChannel={this.props.videoPageChannel}
        videoPageCategory={this.props.videoPageCategory} />
    )
  }

  renderVideoList = () => {
    return (
      <VideoList
        page="videoPage"
        videoList={this.props.videoPageRelatedVideos} />
    )
  }

  fetchingData = () => {
    if (this.props.videoPage.isFetching) { return true }
    if (this.props.videoPageChannel.isFetching) { return true }
    if (this.props.videoPageCategory.isFetching) { return true }
    if (this.props.videoPageRelatedVideos.isFetching) { return true }
    return false
  }

  render() {
    return (
      <div className={styles.watchVideo}>
        { this.fetchingData() && <Loading />}
        <div className={styles.videoDetailWrapper}>
          { this.renderVideoDetail() }
        </div>
        <div className={styles.relatedVideosList}>
          { this.props.videoPageRelatedVideos.isFetching && <VideoListLoading thumbSize="Small" /> }
          { !this.props.videoPageRelatedVideos.isFetching && this.renderVideoList() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    videoId: ownProps.match.params.videoId,
    videoPage: state.videoPage,
    videoPageChannel: state.videoPageChannel,
    videoPageCategory: state.videoPageCategory,
    videoPageRelatedVideos: state.videoPageRelatedVideos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchVideoRequest: (videoId) => dispatch(videoPageRequest(videoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)

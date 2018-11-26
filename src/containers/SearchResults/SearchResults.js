import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../../components/Loading/Loading'
import ChannelCardLoading from '../../components/ChannelCard/ChannelCardLoading'
import VideoListLoading from '../../components/VideoList/VideoListLoading'

import ChannelCard from '../../components/ChannelCard/ChannelCard'
import VideoList from '../../components/VideoList/VideoList'

import styles from './SearchResults.module.css'

class SearchResults extends Component {

  componentDidMount() { window.scrollTo(0, 0) }
  componentDidUpdate() { window.scrollTo(0, 0) }

  renderChannelCard = () => {
    return (
      <ChannelCard
        channel={this.props.searchPageChannel.data}
        page="searchResults" />
    )
  }

  renderVideoList = () => {
    return (
      <VideoList
        page="searchResults"
        videoList={this.props.searchPageVideos} />
    )
  }

  fetchingData = () => {
    if (this.props.searchPageVideos.isFetching) { return true }
    if (this.props.searchPageChannel.isFetching) { return true }
    return false
  }

  render() {

    return(
      <section className={styles.searchResultsWrapper}>

        { this.fetchingData() && <Loading /> }

        <article className={styles.channelCardWrapper}>
          { this.props.searchPageChannel.isFetching && <ChannelCardLoading /> }
          { !this.props.searchPageChannel.isFetching && this.renderChannelCard() }
        </article>

        <section className={styles.resultsListWrapper}>
          { this.props.searchPageVideos.isFetching && <VideoListLoading thumbSize="BigResponsive" /> }
          { !this.props.searchPageVideos.isFetching && this.renderVideoList() }
        </section>


      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchPageVideos: state.searchPageVideos,
    searchPageChannel: state.searchPageChannel
  }
}

export default connect(mapStateToProps)(SearchResults)

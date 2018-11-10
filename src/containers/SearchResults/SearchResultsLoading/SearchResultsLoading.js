import React from 'react'

import Loading from '../../../components/Loading/Loading'
import LoadingVideos from './LoadingVideos'

import styles from './searchResultsLoading.module.css'

const SearchResultsLoading = () => {
  return (
    <section className={styles.searchResultsWrapperLoading}>
      <Loading />

      <article className={styles.channelCardWrapperLoading}>
        <article className={styles.card}>
          <div className={styles.avatarWrapper}>
            <p> </p>
          </div>
          <div className={styles.metaDataWrapper}>
            <h1 className={styles.title}> </h1>
            <h2 className={styles.statistics}> </h2>
            <p className={styles.about}> </p>
          </div>
        </article>
      </article>

      <section className={styles.resultsListWrapperLoading}>
        <LoadingVideos />
      </section>

      <article className={styles.playlistBannerWrapperLoading}>
        <div className={styles.playlistBanner}>

          <div className={styles.playlistHeader}>
            <h1> </h1>
            <div className={styles.mainThumbWrapper}>
              <p> </p>
            </div>

            <div className={styles.sideThumbsWrapper}>
              <p> </p>
            </div>
          </div>

          <div className={styles.playlistItems}>
            <ul>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => {
                  return (
                    <li key={item}>
                      <h4> </h4>
                      <h6> </h6>
                    </li>
                  )
                })}
            </ul>
          </div>

        </div>
      </article>


    </section>
  )
}

export default SearchResultsLoading

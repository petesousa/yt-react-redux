
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSearchInputTerm } from '../../actions/actions'
import { setSearchInputSelectedResult } from '../../actions/actions'
import { setSearchInputResultsDisplay } from '../../actions/actions'

// import { submitSearch } from '../../actions/submit_search/index'
//
import SearchInputResultItem from '../../components/SearchInputResultItem/SearchInputResultItem'

import styles from './SearchInput.module.css'

class SearchInputResults extends Component {

  renderResultList() {
    return this.props.fetchSearchTermResults.data.map((result, index) => {
      return (
        <SearchInputResultItem
          key={index}
          result={result}
          isSelected={this.props.searchInputSelectedResult === index}
          selectedResult={this.props.searchInputSelectedResult}
          onResultListItemClick={this.onResultListItemClick}
          onResultListItemMouseOver={this.onResultListItemMouseOver}/>
        )
    })
  }


  onResultListItemMouseOver = (term) => {
    this.props.fetchSearchTermResults.data.map((result, index) => {
      if (result.snippet.title === term) {
        this.props.setSearchInputSelectedResult(index)
      }
      return result
    })
  }

  onResultListItemClick = (term) => {
    this.props.setSearchInputTerm(term)
    // this.props.submitSearch(term)
    this.props.setSearchInputResultsDisplay(false)
  }


  render() {
    return (
      <ul className={styles.searchInputResults}>
        {this.renderResultList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetchSearchTermResults: state.fetchSearchTermResults,
    searchInputSelectedResult: state.searchInputSelectedResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchInputTerm: (term) => dispatch(setSearchInputTerm(term)),
    setSearchInputResultsDisplay: (bool) => dispatch(setSearchInputResultsDisplay(bool)),
    setSearchInputSelectedResult: (index) => dispatch(setSearchInputSelectedResult(index))
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     submitSearch
//   }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputResults)

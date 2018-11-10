import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setSearchInputTerm } from '../../actions/actions'
import { setSearchInputLastTerm } from '../../actions/actions'
import { fetchSearchTermRequest } from '../../actions/actions'
import { setSearchInputResultsDisplay } from '../../actions/actions'
import { setSearchInputSelectedResult } from '../../actions/actions'
import { submitSearchRequest } from '../../actions/actions'

import SearchInputResults from './SearchInputResults'

import styles from './SearchInput.module.css'

class SearchInput extends Component {

  componentDidMount() {}

  manageSelected = (dir, current = this.props.searchInputSelectedResult) => {
    const value = dir === "up" ? - 1 : 1
    current = current + value

    if (current < -1) { current = 9 }

    if (current > 9 ) { current = -1 }

    const term = current === -1 ? this.props.searchInputLastTerm.term : this.props.fetchSearchTermResults.data[current].snippet.title
    this.props.setSearchInputTerm(term)
    this.props.setSearchInputSelectedResult(current)
  }

  keyPressHandle = (event) => {
    if (event.keyCode === 38) {
      event.preventDefault()
      this.manageSelected('up')
      this.props.setSearchInputResultsDisplay(true)
    }
    if (event.keyCode === 40) {
      event.preventDefault()
      this.manageSelected('down')
      this.props.setSearchInputResultsDisplay(true)
    }
    if (event.keyCode === 27) { this.props.setSearchInputResultsDisplay(false) }
    if (event.keyCode === 13) { this.props.setSearchInputResultsDisplay(false) }
  }


  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.setSearchInputResultsDisplay(false)
    const term = event.target.querySelector('#searchInput').value
    this.props.submitSearchRequest(term)
    this.props.history.push('/results')
  }

  onInputChange = (term) => {
    this.props.setSearchInputLastTerm(this.props.searchInputTerm.term)
    this.props.setSearchInputTerm(term)
    this.props.fetchSearchTermRequest(term)

    if (term === "") {
      this.props.setSearchInputResultsDisplay(false)
    } else {
      this.props.setSearchInputResultsDisplay(true)
    }
  }

  render() {
    return (
      <form
        className={styles.searchInputForm}
        autoComplete="off"
        onSubmit={this.onFormSubmit}>

        <input
          className={styles.searchInput}
          id="searchInput"
          value={this.props.searchInputTerm.term}
          onKeyDown={event => this.keyPressHandle(event)}
          onChange={event => this.onInputChange(event.target.value)} />
          {
            this.props.searchInputResultsDisplay
              ?
                <SearchInputResults />
              :
                null
          }
          <button className={styles.formSubmit} type="submit">
            <i className="fas fa-search"></i>
          </button>
      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    searchInputTerm: state.searchInputTerm,
    searchInputLastTerm: state.searchInputLastTerm,
    fetchSearchTermResults: state.fetchSearchTermResults,
    searchInputResultsDisplay: state.searchInputResultsDisplay,
    searchInputSelectedResult: state.searchInputSelectedResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchInputTerm: (term) => dispatch(setSearchInputTerm(term)),
    setSearchInputLastTerm: (term) => dispatch(setSearchInputLastTerm(term)),
    fetchSearchTermRequest: (term) => dispatch(fetchSearchTermRequest(term)),
    setSearchInputResultsDisplay: (bool) => dispatch(setSearchInputResultsDisplay(bool)),
    setSearchInputSelectedResult: (index) => dispatch(setSearchInputSelectedResult(index)),
    submitSearchRequest: (term) => dispatch(submitSearchRequest(term))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchInput))

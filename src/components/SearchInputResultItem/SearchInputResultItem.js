import React from 'react'
import { Link } from 'react-router-dom'

import styles from './SearchInputResultItem.module.css'

const SearchInputResultItem = (props) => {
  const { isSelected } = props
  const { title } = props.result.snippet
  return (
    <li
      onClick={event => props.onResultListItemClick(title)}
      onMouseEnter={event => props.onResultListItemMouseOver(title)}
      className={isSelected ? styles.resultSelected : null}>

      <Link className={styles.reactLink} to="/results">{title}</Link>
    </li>
  )
}

export default SearchInputResultItem

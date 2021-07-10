import React from 'react'
import { useIntl } from 'react-intl'
import { connectSearchBox } from 'react-instantsearch-dom'

import SearchIcon from '../../../static/assets/icons/search.inline.svg'
import ResetIcon from '../../../static/assets/icons/close.inline.svg'

import {
  algForm,
  algInput,
  resetButton,
  resetIcon,
  searchTips,
  searchIcon
} from './searchBox.module.styl'

const SearchBox = ({ currentRefinement, refine, onFocus, onBlur }) => {
  const intl = useIntl()
  return (
    <form noValidate action="" role="search" className={algForm}>
      <input
        className={algInput}
        type="text"
        placeholder={intl.formatMessage({ id: `search.placeholder` })}
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button
        type="reset"
        onClick={() => refine('')}
        disabled={!currentRefinement.length}
        className={resetButton}
      >
        <ResetIcon className={resetIcon} />
      </button>
      <SearchIcon className={searchIcon} />
    </form>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox

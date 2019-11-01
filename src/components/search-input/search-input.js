import React, { useRef } from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const SearchInput = ({ className, placeholder, onRequest }) => {
  const searchField = useRef()
  const searchRequest = () => {
    const { value } = searchField.current
    onRequest && onRequest(value)
  }
  return (
    <div className={className}>
      <input
        ref={searchField}
        className='search-input__field'
        type='text'
        onKeyDown={e => e.key === 'Enter' && searchRequest()}
        placeholder={placeholder}
      />
      <button
        className='search-input__button'
        type='button'
        onClick={searchRequest}
      >
        <MdSearch size={24} />
      </button>
    </div>
  )
}

const StyledSearchInput = styled(SearchInput)`
  display: flex;
  .search-input__field {
    box-sizing: border-box; 
    width: 250px;
    height: 48px;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 8px;
    &:focus {
      border-color: rgba(0,0,0,.75);
    }
    &::placeholder {
      text-align: center;
    }
  }
  .search-input__button {
    margin-left: 8px;
    height: 48px;
    width: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #767676;
    color: #fff;
    border: 1px solid #767676;
    border-radius: 5px;
  }
`

StyledSearchInput.defaultProps = {
  placeholder: 'O que deseja pesquisar?'
}

StyledSearchInput.displayName = 'SearchInput'

export default StyledSearchInput

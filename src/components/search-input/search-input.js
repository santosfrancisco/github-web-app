import React, { Component } from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

class SearchInput extends Component {
  constructor () {
    super()
    this.searchField = React.createRef()
  }

  searchRequest = () => {
    const { onRequest } = this.props
    const searchQuery = this.searchField.current.value
    onRequest && onRequest(searchQuery)
  }

  handleClick = () => this.searchRequest()

  handleKeyDown = e => e.key === 'Enter' && this.searchRequest()

  render () {
    const { className, placeholder } = this.props
    return (
      <div className={className}>
        <input
          ref={this.searchField}
          className='search-input__field'
          type='text'
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
        />
        <button
          className='search-input__button'
          type='button'
          onClick={this.handleClick}
        >
          <MdSearch size={24} />
        </button>
      </div>
    )
  }
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

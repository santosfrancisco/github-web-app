import React from 'react'
import styled from 'styled-components'
import { MdNavigateBefore ,MdNavigateNext } from 'react-icons/md'

const Pagination = ({
  className,
  onRequestPreviousPage,
  onRequestNextPage,
  hasNextPage,
  hasPreviousPage
}) => {
  return (
    <div className={className}>
      <button
        className='pagination__previous-button'
        disabled={!hasPreviousPage}
        onClick={onRequestPreviousPage}
      >
        <MdNavigateBefore size={24} />
      </button>
      <button
        className='pagination__next-button'
        disabled={!hasNextPage}
        onClick={onRequestNextPage}
      >
        <MdNavigateNext size={24} />
      </button>
    </div>
  )
}

const StyledPagination = styled(Pagination)`
display: flex;
flex-direction: row;
justify-content: center;
  .pagination__previous-button,
  .pagination__next-button {
    border-radius: 24px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 24px;

    &:disabled {
      opacity: .6;
    }
  }
  button + button {
    margin-left: 24px;
  }
`

export default StyledPagination

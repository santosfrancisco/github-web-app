import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext
} from 'react-icons/md'

const Pagination = ({
  className,
  onChangePage,
  initialPage,
  items,
  pageSize
}) => {
  const [pager, setPager] = useState({})

  const setPage = (page) => {
    const pager = getPager(items.length, page, pageSize)
    const pageItems = items.slice(pager.startIndex, pager.endIndex + 1)
    setPager(pager)
    onChangePage && onChangePage(pageItems, pager.currentPage)
  }

  const getPager = (totalItems, currentPage, pageSize) => {
    const totalPages = Math.ceil(totalItems / pageSize)

    if (currentPage > totalPages || currentPage < 1) currentPage = 1

    let startPage
    let endPage
    if (totalPages <= 3) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage < 3) {
        startPage = 1
        endPage = 3
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2
        endPage = totalPages
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    }
  }

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage, items])

  if (!pager.pages || pager.pages.length <= 1) {
    return null
  } else {
    return (
      <div className={className}>
        <ul className='pagination'>
          <li id='first-page' className={classnames('page-item', { disabled: pager.currentPage === 1 })} onClick={() => setPage(1)}>
            <MdFirstPage />
          </li>
          <li id='previous-page' className={classnames('page-item', { disabled: pager.currentPage === 1 })} onClick={() => setPage(pager.currentPage - 1)}>
            <MdNavigateBefore />
          </li>
          {pager.pages.map((page, index) =>
            (<li id={`page-${page}`} key={index} className={classnames('page-item', { active: pager.currentPage === page })} onClick={() => setPage(page)}>
              <span>{page}</span>
            </li>)
          )}
          <li id='next-page' className={classnames('page-item', { disabled: pager.currentPage === pager.totalPages })} onClick={() => setPage(pager.currentPage + 1)}>
            <MdNavigateNext />
          </li>
          <li id='last-page' className={classnames('page-item', { disabled: pager.currentPage === pager.totalPages })} onClick={() => setPage(pager.totalPages)}>
            <MdLastPage />
          </li>
        </ul>
      </div>
    )
  }
}

const StyledPagination = styled(Pagination)`
  width: 100%;
  text-align: center;
  font-family: var(--site-font);
  .pagination {
    padding: 16px 0;
    display: inline-flex;
  }
  .page-item {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid transparent;
    :hover {
    border: 1px solid rgba(0, 0, 0, .5);
    }
  }
  .page-item + .page-item {
    margin-left: 8px;
  }
  .active {
    border: 1px solid rgba(0, 0, 0, .5);
    font-size: 24px;
  }
  .disabled {
    color: rgba(0, 0, 0, .3);
    pointer-events: none;
  }
`

StyledPagination.defaultProps = {
  items: [],
  initialPage: 1,
  pageSize: 6
}

StyledPagination.displayName = 'Pagination'

export default StyledPagination

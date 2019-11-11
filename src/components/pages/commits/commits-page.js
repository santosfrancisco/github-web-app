import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'
import Layout from '../../layout'
import Loader from '../../loader'
import Pagination from '../../pagination'
import SearchInput from '../../search-input'
import CommitsList from '../../commits-list'

const CommitsPage = ({
  className,
  isLoading,
  getCommits,
  commits,
  errorMessage,
  match,
  location,
  history
}) => {
  const [filteredCommits, setFilteredCommits] = useState([])
  const [pageItems, setPageItems] = useState([])
  const [filter, setFilter] = useState('')

  const getCurrentPage = () => {
    const search = new URLSearchParams(location.search)
    const currentPage = parseInt(search.get('page'))
    return currentPage || 1
  }

  const filterCommits = () => {
    let filteredCommits = commits.nodes
    if (filter) {
      filteredCommits = filteredCommits.filter(
        ({ commit }) => commit.message.toLowerCase().includes(filter)
      )
    }
    setFilteredCommits(filteredCommits)
  }

  const handleChangePage = (pageItems, page) => {
    setPageItems(pageItems)
    history.push(`?page=${page}`)
  }

  const handleFilter = query => setFilter(query)

  useEffect(() => {
    const { user, repo } = match.params
    getCommits && getCommits(user, repo)
  }, [])

  useEffect(() => filterCommits(), [commits, filter])

  useEffect(() => {
    errorMessage && toastr.error(errorMessage)
  }, [errorMessage])

  return (
    <Layout className={className}>
      <SearchInput
        className='commits-page__search-input'
        placeholder='pesquisar...'
        onRequest={handleFilter}
      />
      {isLoading
        ? <Loader />
        : <div>
          <CommitsList commits={pageItems} />
          <Pagination
            items={filteredCommits}
            initialPage={getCurrentPage()}
            onChangePage={handleChangePage}
          />
        </div>
      }
    </Layout>
  )
}

const StyledCommitsPage = styled(CommitsPage)`
  .commits-page__search-input {
    margin: 32px auto;
  }
`

StyledCommitsPage.displayName = 'CommitsPage'

StyledCommitsPage.defaultProps = {
  commits: []
}

export default StyledCommitsPage

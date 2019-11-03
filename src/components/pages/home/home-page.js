import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'
import Layout from '../../layout'
import Loader from '../../loader'
import Pagination from '../../pagination'
import SearchInput from '../../search-input'
import RepositoriesList from '../../repositories-list'

const HomePage = ({
  className,
  isLoading,
  getRepositories,
  repositories,
  errorMessage,
  history,
  location,
  match
}) => {
  const [pageItems, setPageItems] = useState([])

  const getUser = () => {
    const { user } = match.params
    return user
  }

  const getCurrentPage = () => {
    const search = new URLSearchParams(location.search)
    const currentPage = parseInt(search.get('page'))
    return currentPage || 1
  }

  const handleSearchRequest = user => {
    if (!user) return
    getRepositories && getRepositories(user)
    history.push(`/${user}`)
  }

  const handleChangePage = (pageItems, page) => {
    setPageItems(pageItems)
    if (pageItems.length) history.push(`?page=${page}`)
  }

  useEffect(() => {
    const user = getUser()
    if (user) getRepositories(user)
  }, [])

  useEffect(() => {
    errorMessage && toastr.error(errorMessage)
  }, [errorMessage])
  return (
    <Layout className={className}>
      <SearchInput
        className='home-page__search-input'
        placeholder='Informe um usuário github'
        onRequest={handleSearchRequest}
        value={getUser()}
      />
      {isLoading
        ? <Loader />
        : <div>
          {pageItems.length > 0 && <RepositoriesList repositories={pageItems} />}
          <Pagination
            items={repositories}
            initialPage={getCurrentPage()}
            onChangePage={handleChangePage}
          />
        </div>
      }
    </Layout>
  )
}

const StyledHomePage = styled(HomePage)`
  padding-bottom: 24px;
  .home-page__title {
    text-align: center;
  }
  .home-page__search-input {
    margin: 32px auto;
  }
`

StyledHomePage.displayName = 'HomePage'

StyledHomePage.defaultProps = {
  repositories: []
}

export default StyledHomePage

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'
import Layout from '../../layout'
import Loader from '../../loader'
import Pagination from '../../pagination/pagination'
import SearchInput from '../../search-input'
import RepositoriesList from '../../repositories-list'

const HomePage = ({
  className,
  isLoading,
  getRepositories,
  repositories,
  errorMessage,
  history,
  match
}) => {
  const getUser = () => {
    const { user } = match.params
    return user
  }

  const handleSearchRequest = user => {
    if (!user) return
    getRepositories && getRepositories({ user, first: 10 })
    history.push(`/${user}`)
  }

  useEffect(() => {
    const user = getUser()
    console.log('TCL: user', user)
    if (user) getRepositories({ user, first: 10 })
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
          {repositories.nodes.length > 0 && <RepositoriesList repositories={repositories} />}
          <Pagination
            onRequestPreviousPage={() => getRepositories({ user: getUser(), before: repositories.pageInfo.startCursor, last: 10 })}
            onRequestNextPage={() => getRepositories({ user: getUser(), after: repositories.pageInfo.endCursor, first: 10 })}
            hasNextPage={repositories.pageInfo.hasNextPage}
            hasPreviousPage={repositories.pageInfo.hasPreviousPage}
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

export default HomePage

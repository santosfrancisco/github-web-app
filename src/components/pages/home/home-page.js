import React, { Component } from 'react'
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'
import Layout from '../../layout'
import Loader from '../../loader'
import Pagination from '../../pagination'
import SearchInput from '../../search-input'
import RepositoriesList from '../../repositories-list'

class HomePage extends Component {
  state = {
    pageItems: [],
    currentPage: 1
  }

  getCurrentPage = () => {
    const { location } = this.props
    const search = new URLSearchParams(location.search)
    const currentPage = parseInt(search.get('page'))
    return currentPage || 1
  }

  componentDidUpdate (prevProps) {
    if (this.props !== prevProps) {
      const { errorMessage } = this.props
      errorMessage && toastr.error(errorMessage)
    }
  }

  handleSearchRequest = user => {
    if (!user) return
    this.setState({ user })
    const { getRepositories } = this.props
    getRepositories && getRepositories(user)
  }

  handleChangePage = (pageItems, page) => {
    this.setState({ pageItems })
    this.props.history.push(`?page=${page}`)
  }

  render () {
    const { currentPage, pageItems } = this.state
    const { className, isLoading, repos } = this.props
    return (
      <Layout className={className}>
        <SearchInput
          className='home-page__search-input'
          placeholder='Informe um usuário github'
          onRequest={this.handleSearchRequest}
        />
        {isLoading
          ? <Loader />
          : <div>
            {pageItems.length > 0 && <RepositoriesList repos={pageItems} />}
            <Pagination
              items={repos}
              initialPage={currentPage}
              onChangePage={this.handleChangePage}
            />
          </div>
        }
      </Layout>
    )
  }
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
  repos: []
}

export default StyledHomePage

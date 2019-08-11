import React, { Component } from 'react'
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'
import Layout from '../../layout'
import Loader from '../../loader'
import Pagination from '../../pagination'
import SearchInput from '../../search-input'
import CommitsList from '../../commits-list'

class CommitsPage extends Component {
  state = {
    filter: '',
    filteredCommits: [],
    pageItems: [],
    currentPage: 1
  }

  getCurrentPage = () => {
    const { location } = this.props
    const search = new URLSearchParams(location.search)
    const currentPage = parseInt(search.get('page'))
    return currentPage || 1
  }

  filterCommits = () => {
    const { filter } = this.state
    const { commits } = this.props
    let filteredCommits = commits
    if (filter) {
      filteredCommits = filteredCommits.filter(
        ({ commit }) => commit.message.toLowerCase().includes(filter)
      )
    }
    this.setState({ filteredCommits })
  }

  componentDidMount () {
    const { match, getCommits, commits } = this.props
    const { user, repo } = match.params
    getCommits && getCommits(user, repo)
    commits && this.filterCommits()
    const currentPage = this.getCurrentPage()
    this.setState({ currentPage })
  }

  componentDidUpdate (prevProps) {
    if (this.props.commits !== prevProps.commits) {
      const { errorMessage } = this.props
      errorMessage && toastr.error(errorMessage)
      this.filterCommits()
    }
  }

  handleChangePage = (pageItems, page) => {
    this.setState({ pageItems })
    this.props.history.push(`?page=${page}`)
  }

  handleFilter = filter => this.setState(
    { filter: filter.toLowerCase() },
    () => this.filterCommits()
  )

  render () {
    const { currentPage, pageItems, filteredCommits } = this.state
    const { className, isLoading } = this.props
    return (
      <Layout className={className}>
        <SearchInput
          className='commits-page__search-input'
          placeholder='pesquisar...'
          onRequest={this.handleFilter}
        />
        {isLoading
          ? <Loader />
          : <div>
            <CommitsList commits={pageItems} />
            <Pagination
              items={filteredCommits}
              initialPage={currentPage}
              onChangePage={this.handleChangePage}
            />
          </div>
        }
      </Layout>
    )
  }
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

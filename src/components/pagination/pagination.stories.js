import React from 'react'
import { storiesOf } from '@storybook/react'
import { Route, MemoryRouter } from 'react-router-dom'
import Pagination from './'

import repositories from '../../mock/repositories'

class PaginationWrapper extends React.Component {
  state = {
    items: repositories,
    currentPage: 1,
    pageItems: []
  }

  handleChangePage = (pageItems, page) => {
    this.setState({ pageItems })
    this.props.history.push(`?page=${page}`)
  }

  render () {
    const { items, currentPage, pageItems } = this.state
    return (
      <div>
        <ul>
          {pageItems.map(item => <li>{item.name}</li>)}
        </ul>
        <Pagination items={items} initialPage={currentPage} pageSize={3} onChangePage={this.handleChangePage} />
      </div>
    )
  }
}

storiesOf('Components/Pagination', module)
  .add('default', () => (
    <MemoryRouter initialEntries={['/posts']}>
      <Route path='/posts' component={props => (
        <PaginationWrapper {...props} />
      )} />
    </MemoryRouter>
  ))

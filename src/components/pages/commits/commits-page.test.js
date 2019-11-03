import 'jest-styled-components'

import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import CommitsPage from './'

import commits from '../../../mock/commits'

describe('<CommitsPage />', () => {
  it('should render all commits', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/santosfrancisco/gatsby-starter-cv?page=1']}>
        <Route path='/:user/:repo' component={props => <CommitsPage commits={commits} {...props} />} />
      </MemoryRouter>
    )

    const CommitsListComponent = component.find('CommitsList')

    expect(CommitsListComponent.find('li').length).toEqual(commits.length)
  })

  it('should filter commits', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/santosfrancisco/gatsby-starter-cv?page=1']}>
        <Route path='/:user/:repo' component={props => <CommitsPage commits={commits} {...props} />} />
      </MemoryRouter>
    )

    const SearchInputComponent = component.find('SearchInput')

    SearchInputComponent.find('input.search-input__field').instance().value = 'adding'
    SearchInputComponent.find('button.search-input__button').simulate('click')

    const CommitsListComponent = component.find('CommitsList')

    expect(CommitsListComponent.find('li').length).toEqual(1)
  })

  it('should have the right displayName', () => {
    expect(CommitsPage.displayName).toEqual('CommitsPage')
  })
})

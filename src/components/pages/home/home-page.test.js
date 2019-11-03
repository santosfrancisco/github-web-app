import 'jest-styled-components'

import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import HomePage from './'

import repositories from '../../../mock/repositories'

describe('<HomePage />', () => {
  it('should render all repositories', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route path='/' component={props => <HomePage repositories={repositories} {...props} />} />
      </MemoryRouter>
    )

    const RepositoriesListComponent = component.find('RepositoriesList')

    expect(RepositoriesListComponent.find('li').length).toEqual(repositories.length)
  })

  it('should includes link to the commits', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route path='/' component={props => <HomePage repositories={repositories} {...props} />} />
      </MemoryRouter>
    )
    const repositoriesList = component.find('RepositoriesList')
    expect(repositoriesList.find('Link').first().props().to).toBe(`/${repositories[0].full_name}`)
  })

  it('should request commits from user provided by path param', () => {
    const user = 'santosfrancisco'
    const mockFn = jest.fn()
    mount(
      <MemoryRouter initialEntries={[`/${user}`]}>
        <Route path='/:user?' component={props => <HomePage getRepositories={mockFn} {...props} />} />
      </MemoryRouter>
    )
    expect(mockFn).toBeCalledWith(user)
  })

  it('should have the right displayName', () => {
    expect(HomePage.displayName).toEqual('HomePage')
  })
})

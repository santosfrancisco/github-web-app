import 'jest-styled-components'

import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { mount } from 'enzyme'
import HomePage from './'

import repositories from '../../../mock/repositories'

describe('<HomePage />', () => {
  it('should render all repositories', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/?page=1']}>
        <Route path='/' component={props => <HomePage repos={repositories} {...props} />} />
      </MemoryRouter>
    )

    const RepositoriesListComponent = component.find('RepositoriesList')

    expect(RepositoriesListComponent.find('li').length).toEqual(repositories.length)
  })

  it('should includes link to the commits', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/?page=1']}>
        <Route path='/' component={props => <HomePage repos={repositories} {...props} />} />
      </MemoryRouter>
    )
    const postList = component.find('RepositoriesList')
    expect(postList.find('Link').first().props().to).toBe(`/${repositories[0].full_name}`)
  })

  it('should have the right displayName', () => {
    expect(HomePage.displayName).toEqual('HomePage')
  })
})

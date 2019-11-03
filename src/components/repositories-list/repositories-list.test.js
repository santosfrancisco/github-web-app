import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import RepositoriesList from './'

import repositories from '../../mock/repositories'

describe('<RepositoriesList />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<RepositoriesList repositories={repositories} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the repositories correctly', () => {
    const component = mount(
      <MemoryRouter>
        <RepositoriesList repositories={repositories} />
      </MemoryRouter>)

    expect(component.find('li').length).toEqual(repositories.length)
  })

  it('should render the empty list message if no repositories exists', () => {
    const component = mount(
      <MemoryRouter>
        <RepositoriesList repositories={[]} />
      </MemoryRouter>)

    expect(component.find('EmptyList').exists()).toBe(true)
  })

  it('should have the right displayName', () => {
    expect(RepositoriesList.displayName).toEqual('RepositoriesList')
  })
})

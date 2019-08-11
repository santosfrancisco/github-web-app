import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import RepositoriesList from './'

import repos from '../../mock/repositories'

describe('<RepositoriesList />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<RepositoriesList repos={repos} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the repositories correctly', () => {
    const component = mount(
      <MemoryRouter>
        <RepositoriesList repos={repos} />
      </MemoryRouter>)

    expect(component.find('li').length).toEqual(repos.length)
  })

  it('should render the empty list message if no repositories exists', () => {
    const component = mount(
      <MemoryRouter>
        <RepositoriesList repos={[]} />
      </MemoryRouter>)

    expect(component.find('EmptyList').exists()).toBe(true)
  })

  it('should have the right displayName', () => {
    expect(RepositoriesList.displayName).toEqual('RepositoriesList')
  })
})

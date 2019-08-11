import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import CommitsList from './'

import commits from '../../mock/commits'

describe('<CommitsList />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<CommitsList commits={commits} />)
    expect(component).toMatchSnapshot()
  })

  it('should render the commits correctly', () => {
    const component = mount(
      <MemoryRouter>
        <CommitsList commits={commits} />
      </MemoryRouter>)

    expect(component.find('li').length).toEqual(commits.length)
  })

  it('should render the empty list message if no commits exists', () => {
    const component = mount(
      <MemoryRouter>
        <CommitsList commits={[]} />
      </MemoryRouter>)

    expect(component.find('EmptyList').exists()).toBe(true)
  })

  it('should have the right displayName', () => {
    expect(CommitsList.displayName).toEqual('CommitsList')
  })
})

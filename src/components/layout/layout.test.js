import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Layout from './'

describe('<Layout />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Layout title='My Page'><div>content</div></Layout>)
    expect(component).toMatchSnapshot()
  })

  it('should render the children correctly', () => {
    const component = mount(
      <MemoryRouter>
        <Layout title='My Page'>
          <div id='content'>content</div>
        </Layout>
      </MemoryRouter>
    )

    expect(component.find('div#content').length).toBe(1)
  })

  it('should have the right displayName', () => {
    expect(Layout.displayName).toEqual('Layout')
  })
})

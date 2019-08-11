import 'jest-styled-components'

import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './'

describe('<NotFound />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<NotFound />)
    expect(component).toMatchSnapshot()
  })

  it('should have the right displayName', () => {
    expect(NotFound.displayName).toEqual('NotFoundPage')
  })
})

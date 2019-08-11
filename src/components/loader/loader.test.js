import 'jest-styled-components'

import React from 'react'
import { shallow } from 'enzyme'
import Loader from './'

describe('<Loader />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Loader />)
    expect(component).toMatchSnapshot()
  })

  it('should have the right displayName', () => {
    expect(Loader.displayName).toEqual('Loader')
  })
})

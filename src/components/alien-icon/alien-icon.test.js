import 'jest-styled-components'

import React from 'react'
import { shallow } from 'enzyme'
import AlienIcon from './'

describe('<AlienIcon />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<AlienIcon />)
    expect(component).toMatchSnapshot()
  })

  it('should have the right displayName', () => {
    expect(AlienIcon.displayName).toEqual('AlienIcon')
  })
})

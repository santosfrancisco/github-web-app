import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import EmptyList from './'

describe('<EmptList />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<EmptyList>Nenhum item encontrado</EmptyList>)
    expect(component).toMatchSnapshot()
  })
  it('should render the children', () => {
    const component = mount(<EmptyList>Nenhum item encontrado</EmptyList>)
    expect(component.text()).toEqual('Nenhum item encontrado')
  })

  it('should have the right displayName', () => {
    expect(EmptyList.displayName).toEqual('EmptyList')
  })
})

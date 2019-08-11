import 'jest-styled-components'

import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchInput from './'

describe('<SearchInput />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<SearchInput />)
    expect(component).toMatchSnapshot()
  })

  it('should send a value to search', () => {
    const mockRequestFn = jest.fn()
    const searchquery = 'username'
    const component = mount(<SearchInput onRequest={mockRequestFn} />)
    component.find('input.search-input__field').instance().value = searchquery
    component.find('button.search-input__button').prop('onClick')()
    expect(mockRequestFn).toHaveBeenCalled()
    expect(mockRequestFn).toBeCalledWith(searchquery)
  })

  it('should have the right displayName', () => {
    expect(SearchInput.displayName).toEqual('SearchInput')
  })
})

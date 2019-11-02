import 'jest-styled-components'
import { act } from 'react-dom/test-utils'

import React from 'react'
import { shallow, mount } from 'enzyme'
import Pagination from './'
import repos from '../../mock/repositories'

describe('<Pagination />', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Pagination />)
    expect(component).toMatchSnapshot()
  })

  it('should have the right displayName', () => {
    expect(Pagination.displayName).toEqual('Pagination')
  })
  it('should paginate the items correctly', () => {
    const props = {
      initialPage: 1,
      pageSize: 3
    }
    const mockFn = jest.fn()
    const component = mount(<Pagination
      items={repos}
      initialPage={props.initialPage}
      pageSize={props.pageSize}
      onChangePage={mockFn} />
    )
    expect(mockFn.mock.calls[0][0].length).toBe(props.pageSize)
    expect(mockFn.mock.calls[0][1]).toBe(1)
    act(() => {
      component.find('#next-page').prop('onClick')()
    })
    expect(mockFn.mock.calls[1][0].length).toBe(repos.length - props.pageSize)
    expect(mockFn.mock.calls[1][1]).toBe(2)
  })
  it('should redirect to page 1 if current page is grater than total pages', () => {
    const mockFn = jest.fn()
    const component = mount(<Pagination
      items={repos}
      initialPage={10}
      onChangePage={mockFn} />
    )
    component.update()
    expect(mockFn.mock.calls[0][1]).toBe(1)
  })
})

import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchInput from './'

storiesOf('Components/SearchInput', module)
  .add('default', () => (
    <SearchInput onSearchRequest={value => console.log(value)} />)
  )

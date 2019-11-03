import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'
import HomePage from './'

import repos from '../../../mock/repositories'

storiesOf('Pages/HomePage', module)
  .add('default', () => (
    <MemoryRouter initialEntries={['/']}>
      <Route path='/' component={props => <HomePage repositories={repos} {...props} />} />
    </MemoryRouter>
  )
  )

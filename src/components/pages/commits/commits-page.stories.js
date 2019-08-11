import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'
import CommitsPage from './'

import commits from '../../../mock/commits'

storiesOf('Pages/CommitsPage', module)
  .add('default', () => (
    <MemoryRouter initialEntries={['/']}>
      <Route path='/' component={props => <CommitsPage commits={commits} {...props} />} />
    </MemoryRouter>
  )
  )

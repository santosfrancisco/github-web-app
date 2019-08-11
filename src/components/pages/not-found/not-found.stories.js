import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'
import NotFound from './'

storiesOf('Pages/NotFound', module)
  .add('default', () => (
    <MemoryRouter initialEntries={['/foo-bar']}>
      <Route component={props => <NotFound {...props} />} />
    </MemoryRouter>
  )
  )

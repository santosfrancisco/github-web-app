import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import RepositoriesList from './'

import repositories from '../../mock/repositories'

storiesOf('Components/RepositoriesList', module)
  .add('default', () => (
    <MemoryRouter>
      <RepositoriesList repositories={repositories} />
    </MemoryRouter>)
  )

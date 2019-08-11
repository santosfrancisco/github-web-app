import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import CommitsList from './'

import commits from '../../mock/commits'

storiesOf('Components/CommitsList', module)
  .add('default', () => (
    <MemoryRouter>
      <CommitsList commits={commits} />
    </MemoryRouter>
  )
  )

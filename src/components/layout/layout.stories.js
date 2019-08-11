import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from './'

storiesOf('Components/Layout', module)
  .add('default', () => (
    <MemoryRouter>
      <Layout>
        <div>content</div>
      </Layout>
    </MemoryRouter>
  )
  )

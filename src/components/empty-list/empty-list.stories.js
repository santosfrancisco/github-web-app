import React from 'react'
import { storiesOf } from '@storybook/react'

import EmptyList from './'

storiesOf('Components/EmptyList', module)
  .add('default', () => (
    <EmptyList>Nenhum commit encontrado</EmptyList>
  ))

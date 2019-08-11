import React from 'react'
import { storiesOf } from '@storybook/react'

import Loader from './'

storiesOf('Components/Loader', module)
  .add('default', () => (
    <Loader />
  ))

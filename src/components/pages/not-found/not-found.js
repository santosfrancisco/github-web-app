import React from 'react'
import styled from 'styled-components'
import AlienIcon from '../../alien-icon'
import Layout from '../../layout'

const NotFoundPage = styled(({ className }) => (
  <Layout className={className}>
    <div className='not-found__content'>
      <AlienIcon width='100%' />
    </div>
    <h1 className='not-found__title'>Ooops! Página não encontrada!</h1>
  </Layout>
))`
  .not-found__title {
    font-family: var(--site-font);
    font-size: 32px;
    text-align: center;
    margin: 32px 0;
  }
  .not-found__content {
    width: 100%;
    max-width: 600px;
    margin: 32px auto;
  }
`

export default NotFoundPage

import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './redux/containers/home'
import Commits from './redux/containers/commits'
import NotFound from './components/pages/not-found'
import Styles from './style'

export default () => {
  const awesomegrid = {
    container: {
      xs: 'full',
      sm: 60,
      md: 60,
      lg: 60,
      xl: 90
    }
  }
  return (
    <ThemeProvider theme={{ awesomegrid }}>
      <>
        <Styles />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position='bottom-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
          progressBar
          closeOnToastrClick />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:user/:repo' exact component={Commits} />
          <Route component={NotFound} />
        </Switch>
      </>
    </ThemeProvider>
  )
}

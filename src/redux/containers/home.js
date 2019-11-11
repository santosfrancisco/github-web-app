import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepositories } from '../actions/repositories'
import Home from '../../components/pages/home'

const HomeContainer = props => {
  const repositories = useSelector(state => state.repositories)
  const isLoading = useSelector(state => state.isLoading)
  const errorMessage = useSelector(state => state.errorMessage)
  const dispatch = useDispatch()
  return (
    <Home
      repositories={repositories}
      isLoading={isLoading}
      errorMessage={errorMessage}
      getRepositories={({ user, after, before, first, last }) => dispatch(getRepositories({ user, after, before, first, last }))}
      {...props}
    />
  )
}

export default HomeContainer

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepositories } from '../actions/repositories'
import Layout from '../../components/layout'

const HomeContainer = props => {
  const dispatch = useDispatch()
  return (
    <Layout
      getRepositories={({ user }) => dispatch(getRepositories({ user }))}
      {...props}
    />
  )
}

export default HomeContainer

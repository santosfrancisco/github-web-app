import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCommits } from '../actions/commits'
import Commits from '../../components/pages/commits'

const CommitsContainer = props => {
  const commits = useSelector(state => state.commits)
  const isLoading = useSelector(state => state.isLoading)
  const errorMessage = useSelector(state => state.errorMessage)
  const dispatch = useDispatch()
  return (
    <Commits
      commits={commits}
      isLoading={isLoading}
      errorMessage={errorMessage}
      getCommits={(user, repositorie) => dispatch(getCommits(user, repositorie))}
      {...props}
    />
  )
}

export default CommitsContainer

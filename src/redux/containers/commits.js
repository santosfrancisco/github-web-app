import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCommits } from '../actions/commits'
import { getIsLoading } from '../selectors/util'
import Commits from '../../components/pages/commits'

const CommitsContainer = props => <Commits {...props} />

const mapStateToProps = state => ({
  commits: state.commits,
  isLoading: getIsLoading(state),
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCommits }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommitsContainer)

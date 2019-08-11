import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepositories } from '../actions/repositories'
import { getIsLoading } from '../selectors/util'
import Home from '../../components/pages/home'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  repos: state.repositories,
  isLoading: getIsLoading(state),
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getRepositories }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

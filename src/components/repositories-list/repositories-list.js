import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdStar } from 'react-icons/md'
import EmptyList from '../empty-list'

const RepositoriesList = ({ className, repositories }) => {
  return (
    <React.Fragment>
      <h2>Lista de repositórios</h2>
      <ul className={className}>
        {repositories.length > 0 ? repositories.map(repository => <li key={repository.name}>
          <div className='repositories_list__header'>
            <h3>
              <Link
                className='repositories-list__link'
                to={`/${repository.full_name.toLowerCase()}`}
              >
                {repository.name}
              </Link>
            </h3>
            <div className='repositories-list__stars'>
              <MdStar /> {repository.stargazers_count}
            </div>
          </div>
          <div>
            <p>{repository.description}</p>
          </div>
          <hr className='repositories-list__separator' />
        </li>)
          : <EmptyList>Este usuário não existe ou não possui nenhum repositório</EmptyList>}
      </ul>
    </React.Fragment>
  )
}

const StyledRepositoriesList = styled(RepositoriesList)`
  .repositories_list__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .repositories-list__link {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  .repositories-list__stars {
    display: flex;
    align-items: center;
  }

  .repositories-list__separator {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
`

StyledRepositoriesList.displayName = 'RepositoriesList'

StyledRepositoriesList.defaultProps = {
  repositories: []
}

export default StyledRepositoriesList

import React from 'react'
import styled from 'styled-components'
import EmptyList from '../empty-list'

const CommitsList = ({ className, commits }) => {
  return (
    <React.Fragment>
      <h2>Lista de commits</h2>
      <ul className={className}>
        {commits.length > 0 ? commits.map(commit =>
          <li key={commit.oid}>
            <h3>
              <a
                className='commits-list__link'
                href={commit.url}
                target='_blank'
              >
                <span>{commit.messageHeadline}</span>
              </a>
            </h3>
            <p>
              <strong>{commit.author.name}</strong> em {new Date(commit.committedDate).toUTCString()}
            </p>
            <hr className='commits-list__separator' />
          </li>)
          : <EmptyList>Nenhum commit encontrado</EmptyList>}
      </ul>
    </React.Fragment>
  )
}

const StyledCommitsList = styled(CommitsList)`
  .commits-list__title {
    display: flex;
    align-items: center;
  }
  .commits-list__link {
    display: flex;
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }

  .commits-list__separator {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
`

StyledCommitsList.displayName = 'CommitsList'

StyledCommitsList.defaultProps = {
  commits: []
}

export default StyledCommitsList

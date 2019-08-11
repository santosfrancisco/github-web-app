import React from 'react'
import styled from 'styled-components'

const EmptyList = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  padding: 48px;
  margin: 0 auto;
  text-align: center;
`

EmptyList.displayName = 'EmptyList'

export default EmptyList

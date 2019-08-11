import React from 'react'
import styled from 'styled-components'

const Loader = styled(({ className }) => (
  <div className={className}>
    <div />
    <div />
    <div />
    <div />
  </div>
))`
  display: inline-block;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 81px;
    height: 81px;
    margin: 6px;
    border: 6px solid #0095B6;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #0095B6 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

Loader.displayName = 'Loader'

export default Loader

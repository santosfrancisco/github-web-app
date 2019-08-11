import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'

const Layout = styled(({ className, children }) => (
  <Container className={className}>
    <Row >
      <Col className='layout__nav-wrapper'>
        <nav className='layout__nav'>
          <Link className='layout__nav-link' to='/'>
            home
          </Link>
          <a className='layout__nav-link' href='https://github.com/' target='_blank'>
            <GoMarkGithub size={32} />
          </a>
        </nav>
      </Col>
    </Row>
    <Row className='layout__content'>
      <Col xs={4}>{children}</Col>
    </Row>
  </Container>
))`
  .layout__nav-wrapper {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    z-index: 100;
    background-color: #fff;
  }
  .layout__nav {
    padding: 0 16px;
    height: 60px;
    display: flex;
    flex-direction: row;
    z-index: 100;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #fff;
  }
  .layout__nav-link {
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  .layout__nav-link + .layout__nav-link {
    margin-left: 16px;
  }
  .layout__content {
    margin-top: 70px;
  }
`
Layout.displayName = 'Layout'

export default Layout

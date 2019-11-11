import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import styled from 'styled-components'

const Layout = styled(({ className, children }) => (
  <div className={className}>
    <div className='layout__nav-wrapper'>
      <Container>
        <Row>
          <Col as='nav' className='layout__nav'>
            <Link className='layout__nav-link' to='/'>
                home
            </Link>
            <a className='layout__nav-link' href='https://github.com/' target='_blank'>
              <GoMarkGithub size={32} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row className='layout__content'>
        <Col xs={4}>{children}</Col>
      </Row>
    </Container>
  </div>
))`
  .layout__nav-wrapper {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    position: fixed;
    height: 48px;
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 48px;
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
    position: relative;
  }
`
Layout.displayName = 'Layout'

export default Layout

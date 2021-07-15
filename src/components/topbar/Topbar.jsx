import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Context } from '../../store/appContext'
import './topbar.css'

export const Topbar = () => {
  const { store, actions } = useContext(Context)
  const history = useHistory()
  const handleSelect = eventKey => history.push(eventKey)
  return (
    <>
      <Navbar
        className="justify-content-center"
        bg="light"
        variant="light"
        onSelect={handleSelect}
      >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          {store.token && store.token !== '' && store.token !== undefined ? (
            <Nav variant="pills" defaultActiveKey="/" className="me-auto">
              <Nav.Item>
                <Nav.Link eventKey="/overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/charts">Charts</Nav.Link>
              </Nav.Item>
            </Nav>
          ) : null}

          <Navbar className="justify-content-end">
            <div className="ml-auto">
              {!store.token ? (
                <Link to="/login">
                  <Button variant="outline-primary">Log in</Button>
                </Link>
              ) : (
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    history.push('/')
                    actions.logout()
                  }}
                >
                  Log out
                </Button>
              )}
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </>
  )
}

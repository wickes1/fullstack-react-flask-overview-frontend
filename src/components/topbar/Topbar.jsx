import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
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
                  <button className="btn btn-primary">Log in</button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    actions.logout()
                  }}
                  className="btn btn-primary"
                >
                  Log out
                </button>
              )}
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </>

    // <div className="topbar">
    //   <div className="topbarWrapper">
    //     <div className="topLeft">
    //       <Link to="/" className="link">
    //         <span className="home">Homepage</span>
    //       </Link>
    //     </div>

    //     <div className="topMiddle">
    //       <Link to="/" className="link">
    //         <span className="home">Homepage</span>
    //       </Link>
    //     </div>

    //     <div className="topRight">
    //       <div className="ml-auto">
    //         {!store.token ? (
    //           <Link to="/login">
    //             <button className="btn btn-primary">Log in</button>
    //           </Link>
    //         ) : (
    //           <button
    //             onClick={() => {
    //               actions.logout()
    //             }}
    //             className="btn btn-primary"
    //           >
    //             Log out
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <nav className="navbar navbar-light bg-light mb-3">
    //   <Link to="/">
    //     <span className="navbar-brand mb-0 h1">Homepage</span>
    //   </Link>
    //   <div className="ml-auto">
    //     {!store.token ? (
    //       <Link to="/login">
    //         <button className="btn btn-primary">Log in</button>
    //       </Link>
    //     ) : (
    //       <button
    //         onClick={() => {
    //           actions.logout()
    //         }}
    //         className="btn btn-primary"
    //       >
    //         Log out
    //       </button>
    //     )}
    //   </div>
    // </nav>
  )
}

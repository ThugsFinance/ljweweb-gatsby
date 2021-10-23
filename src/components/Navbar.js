import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Col xs={1}>
      </Col>
      <Col style={{direction: 'flex', flexDirection: "column", alignItems: 'center'}}>
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
      <FontAwesomeIcon
          icon={["fas", "home"]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        />
      </Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            Resume
          </Nav.Link>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

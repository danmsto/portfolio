import { Container, Nav, Navbar } from "react-bootstrap";
import Links from "./Links";
import content from "../content";

function MobileNavBar() {

  return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto">
          {<Links />}
        </Nav>
        <Navbar.Text>
          <p>{content.siteFooter}</p>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MobileNavBar;
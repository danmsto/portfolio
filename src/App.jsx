import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Home from "./Home";
import MyProjects from "./MyProjects";
import content from "./content";
import AboutMe from "./AboutMe";

function App() {

  const generateNavigation = () => {
    return (
      <>
        <Link id="navlink" className="btn centered" to="/portfolio">Home</Link>
        <Link id="navlink" className="btn centered" to="/portfolio/my-projects">My Projects</Link>
        <Button className="centered" href="https://github.com/danmsto">My GitHub</Button>
        <Button className="centered" href="https://linkedin.com/in/danmsto">My LinkedIn</Button>
      </>
    );
  };

  return (
    <Container>
      <Row>
        <div>
          <h1 className="centered">{content.siteHeader}</h1>
        </div>
      </Row>
      <Row>
        <div>
          <p className="centered">{content.siteSubheader}</p>
        </div>
      </Row>
      <Row >
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                {generateNavigation()}
              </Nav>
              <Navbar.Text>
                <p>{content.siteFooter}</p>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col sm={9} xs={12}>
          {/* <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/my-projects" element={<MyProjects />} />
          </Routes> */}
          {<AboutMe />}
          {<MyProjects />}
        </Col>
        <Col sm={3} xs={12}>
          {<Home />}
          {generateNavigation()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

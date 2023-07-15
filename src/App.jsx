import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Links from "./components/Links";  
import Badges from "./components/Badges";
import ThemeSwitcher from "./components/ThemeSwitcher";
import csmLogo from "./content/logos/csm.png"

function App() {

  return (
    <Container>
      <Row>
        <Col md={8} sm={12} xs={12} className="headerText siteHeader">
          <Heading />
        </Col>
        <Col md={4} sm={12} xs={12} className="headerText linkCont highlightText">
          <Links />
          <ThemeSwitcher />
        </Col>
      </Row>
      <Row>
        <Col md={8} sm={12} xs={12}>
          <Row className="blackText">
            <MyProjects />
          </Row>
        </Col>
        <Col md={4} sm={12} xs={12} className="blackText">
            <AboutMe />
          <Row className="sidebarDiv">
            <img className="csmImg" alt="Certified ScrumMaster" src={csmLogo} />
          </Row>
          <Row className="sidebarDiv">
            <img className="codewarsImg" alt="Codewars" src="https://www.codewars.com/users/danmsto/badges/large" />
          </Row>
          <Row className="bodySection mt-2">
            <Badges />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

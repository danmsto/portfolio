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

function App() {

  return (
    <Container>
      <Row>
        <Col md={8} sm={12} xs={12} className="headerText siteHeader">
          {<Heading />}
        </Col>
        <Col md={4} sm={12} xs={12} className="headerText linkCont highlightText">
          {<Links />}
          {<ThemeSwitcher />}
        </Col>
      </Row>
      <Row>
        <Col md={8} sm={12} xs={12}>
          <Row className="blackText">
            {<MyProjects />}
          </Row>
        </Col>
        <Col md={4} sm={12} xs={12} className="blackText">
          {/* <Row className="bodySection">
            {<Home />}
          </Row> */}
            {<AboutMe />}
          <Row className="bodySection mt-2">
            {<Badges />}
          </Row>
          <Row className="codeWarsDiv">
            <img className="codewarsImg" alt="Codewars" src="https://www.codewars.com/users/danmsto/badges/large" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

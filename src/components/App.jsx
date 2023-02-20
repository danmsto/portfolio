import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Col, Row } from "react-bootstrap";
import Home from "./Home";
import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import Heading from "./Heading";
import Links from "./Links";  
import Badges from "./Badges";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {

  return (
    <Container>
      <Row>
        <Col md={8} sm={12} xs={12} className="headerText siteHeader">
          {<Heading />}
        </Col>
        <Col md={4} sm={12} xs={12} className="headerText linkCont">
          {<ThemeSwitcher />}
        </Col>
      </Row>
      <Row>
        <Col md={8} sm={12} xs={12}>
          <Row className="bodySection blackText">
            {<MyProjects />}
          </Row>
          <Row className="bodySection blackText p-3 mt-2">
            {<Home />}
          </Row>
          <Row className="bodySection blackText p-3 mt-2">
            {<Badges />}
          </Row>
          <Row className="bodySection blackText p-3 mt-2">
            <Col className="centered">
              <img className="codewarsImg" alt="Codewars" src="https://www.codewars.com/users/danmsto/badges/large" />
            </Col>
          </Row>
        </Col>
        <Col md={4} sm={12} xs={12} className="blackText">
          <Row className="linkCont">
            {<Links />}
          </Row>
          {<AboutMe />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

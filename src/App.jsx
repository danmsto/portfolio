import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Col, Row } from "react-bootstrap";
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

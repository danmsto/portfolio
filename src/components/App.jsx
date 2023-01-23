import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Col, Row } from "react-bootstrap";
import Home from "./Home";
import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Links from "./Links";

function App() {

  return (
    <Container>
      <Row>
      <Col >
        {<Heading />}
        {<Subheading />}
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
        </Col>
        <Col md={4} sm={12} xs={12} className="blackText">
          {<AboutMe />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

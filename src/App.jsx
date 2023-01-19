import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";

function App() {

  return (
    <Container>
      {<Heading />}
      {<Subheading />}
      <Row>
        <Col sm={8} xs={12} id="bodyCol" className="bodyCol blackText p-3">
          {<Home />}
          {<MyProjects />}
        </Col>
        <Col sm={4} xs={12} className="blackText">
          {<AboutMe />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

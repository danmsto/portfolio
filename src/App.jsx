import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Links from "./components/Links";
import MobileNavBar from "./components/MobileNavBar";

function App() {

  return (
    <Container>
      {<Heading />}
      {<Subheading />}
      <Row >
        {<MobileNavBar />}
      </Row>
      <Row>
        <Col sm={9} xs={12}>
          {<AboutMe />}
          {<MyProjects />}
        </Col>
        <Col sm={3} xs={12}>
          {<Home />}
          {<Links />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

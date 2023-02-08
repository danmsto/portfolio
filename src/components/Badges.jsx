import { Col, Container, Row } from "react-bootstrap";
import cssImage from "../content/badges/css.svg";
import githubImage from "../content/badges/github.svg";
import htmlImage from "../content/badges/html.svg";
import javaImage from "../content/badges/java.svg";
import JSImage from "../content/badges/js.svg";
import reactImage from "../content/badges/react.svg";

function Badges() {

  return (
    <Container className="mt-1 p-0">
      <Row>
        <Col>
          <img alt="js" src={JSImage} />
        </Col>
        <Col>
          <img alt="java" src={javaImage} />
        </Col>
        <Col>
          <img alt="git" src={githubImage} />
        </Col>
      </Row>
      <Row>
        <Col>
          <img alt="react" src={reactImage} />
        </Col>
        <Col>
          <img alt="html" src={htmlImage} />
        </Col>
        <Col>
          <img alt="css" src={cssImage} />
        </Col>
      </Row>
    </Container>
  )
}

export default Badges;
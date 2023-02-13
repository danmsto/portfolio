import { Col, Container, Row } from "react-bootstrap";
import cssImage from "../content/badges/css.svg";
import githubImage from "../content/badges/github.svg";
import htmlImage from "../content/badges/html.svg";
import javaImage from "../content/badges/java.svg";
import JSImage from "../content/badges/js.svg";
import reactImage from "../content/badges/react.svg";
import mySQLImage from "../content/badges/mysql.svg";
import csmImage from "../content/badges/csm.png";

function Badges() {

  return (
    <Container className="mt-1 p-0">
      <Row>
        <Col className="centered p-10">
          <img alt="java" className="badges" src={javaImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="js" className="badges" src={JSImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="react" className="badges" src={reactImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="git" className="badges" src={githubImage} />
        </Col>
      </Row>
      <Row>
        <Col className="centered p-10">
          <img alt="html" className="badges" src={htmlImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="css" className="badges" src={cssImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="mySQL" className="badges" src={mySQLImage} />
        </Col>
        <Col className="centered p-10">
          <img alt="csm" className="badges" src={csmImage} />
        </Col>
      </Row>
    </Container>
  )
}

export default Badges;
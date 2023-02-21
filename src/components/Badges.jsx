import { Col, Container, Row } from "react-bootstrap";
import cssImage from "../content/logos/css.svg";
import gitImage from "../content/logos/git.svg"
import htmlImage from "../content/logos/html.svg";
import javaImage from "../content/logos/java.svg";
import JSImage from "../content/logos/js.svg";
import reactImage from "../content/logos/react.svg";
import mySQLImage from "../content/logos/mysql.svg";
import csmImage from "../content/logos/csm.png";

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
          <img alt="git" className="badges" src={gitImage} />
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
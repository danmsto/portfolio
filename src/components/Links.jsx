import { Col, Row } from "react-bootstrap";
import githubIcon from "../content/svgs/github.svg"
import linkedinIcon from "../content/svgs/linkedin.svg"

function Links() {

  return (
    <Row>
      <Col>
        <a href="https://github.com/danmsto" className="linkText" target="_blank" rel="noreferrer"><img src={githubIcon} className="linkImg" alt="GitHub Logo"/>GitHub</a>
      </Col>
      <Col>
        <a href="https://linkedin.com/in/danmsto" className="linkText" target="_blank" rel="noreferrer"><img src={linkedinIcon} className="linkImg" alt="LinkedIn Logo"/>LinkedIn</a>
      </Col>
    </Row>
    )
};

export default Links;
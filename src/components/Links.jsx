import { Col, Row } from "react-bootstrap";
import badgeDealer from "../content/badgeDealer";

function Links() {
  return (
    <Row>
      <Col>
        <a
          href="https://github.com/danmsto"
          className="linkText"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={badgeDealer.github}
            className="linkImg badgeBrightness"
            alt="GitHub Logo"
          />
          GitHub
        </a>
      </Col>
      <Col>
        <a
          href="https://linkedin.com/in/danmsto"
          className="linkText"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={badgeDealer.linkedin}
            className="linkImg badgeBrightness"
            alt="LinkedIn Logo"
          />
          LinkedIn
        </a>
      </Col>
    </Row>
  );
}

export default Links;

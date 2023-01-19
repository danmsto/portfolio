import { Row } from "react-bootstrap";
import content from "../content/content";

function Heading() {

  return (
    <Row className="whiteText siteHeader">
      <div>
        <h1 className="centered">{content.siteHeader}</h1>
      </div>
    </Row>
  )
}

export default Heading;
import { Row } from "react-bootstrap";
import content from "../content";

function Heading() {

  return (
    <Row>
      <div>
        <h1 className="centered">{content.siteHeader}</h1>
      </div>
    </Row>
  )
}

export default Heading;
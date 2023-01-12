import { Row } from "react-bootstrap";
import content from "../content";

function Subheading() {

  return (
    <Row>
      <div>
        <p className="centered">{content.siteSubheader}</p>
      </div>
    </Row>
  )
}

export default Subheading;
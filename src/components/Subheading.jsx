import { Row } from "react-bootstrap";
import content from "../content/content";

function Subheading() {

  return (
    <Row className="whiteText">
      <div>
        <p className="centered">{content.siteSubheader}</p>
      </div>
    </Row>
  )
}

export default Subheading;
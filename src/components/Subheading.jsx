import { Row } from "react-bootstrap";
import content from "../content/content";

function Subheading() {

  return (
    <Row className="whiteText">
      <div>
        <h6 className="centered">{content.siteSubheader}</h6>
      </div>
    </Row>
  )
}

export default Subheading;
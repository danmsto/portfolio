import { Row } from "react-bootstrap";
import content from "../content/content";

function Subheading() {

  return (
    <Row className="headerText">
      <div>
        <h6 className="centered subheading">{content.siteSubheader}</h6>
      </div>
    </Row>
  )
}

export default Subheading;
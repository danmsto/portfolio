import { Container } from "react-bootstrap";
import content from "../content/content";

function Home() {

  return (
    <Container className="mt-1 p-0">
      <h3 className="homeHeading">{content.homeHeading}</h3>
      <p>{content.homeBody}</p>
    </Container>
  );
}

export default Home;

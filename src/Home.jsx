import { Container } from "react-bootstrap";
import content from "./content";

function Home() {

  return (
    <Container>
      <h2>{content.homeHeading}</h2>
      <h3>
        {content.homeSubheading}
      </h3>
      <p>{content.homeBody}</p>
    </Container>
  );
}

export default Home;

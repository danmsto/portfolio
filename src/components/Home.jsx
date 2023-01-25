import { Container } from "react-bootstrap";
import content from "../content/content";

function Home() {

  return (
    <Container className="mt-1 p-0">
      <h2>{content.homeHeading}</h2>
      <p>{content.homeBody}</p>
      <img alt="Agile ScrumMaster" src="https://bcert.me/bc/html/img/badges/generated/badge-7227.png" />
    </Container>
  );
}

export default Home;

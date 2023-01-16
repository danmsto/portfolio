import { Card, Container, Row } from "react-bootstrap";
import content from "../content/content";

function AboutMe() {

  const generateExperience = () => {
    return (
      <>
        {content.experience.map((experience) => {
          return (
            <Row className="sideCol">
              <Card className="p-0 mb-2">
                <Card.Header>
                  <img src={experience.image} alt="experience" height={48} width={48} />
                  {experience.heading}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{experience.body}</Card.Text>
                </Card.Body>
                <Card.Footer>{experience.location}, {experience.dates}</Card.Footer>
              </Card>
            </Row>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      {generateExperience()}
    </Container>
  )

}

export default AboutMe;
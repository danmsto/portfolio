import { Card, Col, Container, Row } from "react-bootstrap";
import content from "./content";

function AboutMe() {
  // const generateExperience = () => {
  //   return content.experience.map((experience) => {
  //     return (
  //       <>
  //         <h4>{experience.heading}</h4>
  //         <p>{experience.body}</p>
  //         <img src={experience.image} alt="experience" />
  //       </>
  //     )
  //   })
  // }

  const generateExperience = () => {
    return (
      <Row xs={1} md={3} className="g-4">
        {content.experience.map((experience) => {
          return (
            <Col>
              <Card>
                {/* <Card.Img
                  variant="bot"
                  src={experience.image}
                  alt="experience"
                  height={48}
                  width={48}
                /> */}
                <Card.Header>
                  <img src={experience.image} alt="experience" height={48} width={48} />
                  {experience.heading}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{experience.body}</Card.Text>
                </Card.Body>
                <Card.Footer>{experience.location}, {experience.dates}</Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
      <h2>{content.aboutTitle}</h2>
      <h6>{content.aboutPersonal}</h6>
      <h3>{content.experienceIntro}</h3>
      {generateExperience()}
    </Container>
  );
}

export default AboutMe;

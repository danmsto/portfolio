import { Container } from "react-bootstrap";
import content from "./content";

function AboutMe() {

  const generateExperience = () => {
    return content.experience.map((experience) => {
      return (
        <>
          <h4>{experience.heading}</h4>
          <p>{experience.body}</p>
        </>
      )
    })
  }

  return (
    <Container>
      <h2>{content.aboutTitle}</h2>
      <h3>{content.aboutPersonal}</h3>
      <h3>{content.experienceIntro}</h3>
      {generateExperience()}
    </Container>
  );
}

export default AboutMe;

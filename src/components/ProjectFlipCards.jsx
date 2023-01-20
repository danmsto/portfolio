import { Button, Container } from "react-bootstrap";
import projects from "../content/projects.js";

function ProjectFlipCards() {

  const generateFlipCards = () => {
    return projects.map((project) => {
      return (
        <div className="flip-card" key={project.title}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.image} alt="Avatar" className="flipCardImg"/>
          </div>
          <div className="flip-card-back">
            <img src={project.logo}/>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.madeWith}</p>
            <Button href={project.link} target="_blank">{project.linkText}</Button>
          </div>
        </div>
      </div>
      )
    })
  }

  return (
    <Container className="flipCardCont">
      {generateFlipCards()}
    </Container>
  );

}

export default ProjectFlipCards;
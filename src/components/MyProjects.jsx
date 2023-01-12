import { Button, Carousel, Container } from "react-bootstrap";
import projects from "../projects.js";

function MyProjects() {
  const generateCarousel = () => {
    return projects.map((project) => {
      return (
        <Carousel.Item
          key={project.title}
          interval={10000}
        >
          <img
            className="carousel-image"
            src={project.image}
            alt="Not appearing"
          />
          <Carousel.Caption>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Button href={project.link} target="_blank">{project.linkText}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <>
      <h2>My Projects</h2>
      <Container >
        <Carousel variant="dark">{generateCarousel()}</Carousel>
      </Container>
    </>
  );
}

export default MyProjects;

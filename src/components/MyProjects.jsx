import { Button, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";

function MyProjects() {
  const generateCarousel = () => {
    return projects.map((project) => {
      return (
        <Carousel.Item
          key={project.title}
          interval={20000}
        >
          <img
            className="carousel-image"
            src={project.image}
            alt="Not appearing"
          />
          <Carousel.Caption className="mb-4">
            <h3><Image src={project.logo}></Image> {project.title}</h3>
            <p>{project.description}</p>
            <p>{project.madeWith}</p>
            <Button href={project.link} target="_blank" rel="noreferrer">{project.linkText}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <Container className="p-0">
      <Carousel variant="dark">{generateCarousel()}</Carousel>
    </Container>
  );
}

export default MyProjects;

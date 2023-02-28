import { Button, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects/projects.js";

function MyProjects() {

  const generateCarousels = () => {
    return projects.map((project) => {
      return (
        <Carousel variant="light" className="mb-1" fade interval={null} >
          <Carousel.Item
            key={project.description}
          >
            <img
              className="carousel-image"
              src={project.image}
              alt="Not appearing"
            />
            <Carousel.Caption className="mb-4">
              <h3><Image src={project.logo}></Image> {project.title}</h3>
              <p>{project.description}</p>
              <Button variant="light" href={project.link} target="_blank" rel="noreferrer">{project.linkText}</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            key={project.functionality}
          >
            <img
              className="carousel-image"
              src={project.image1}
              alt="Not appearing"
            />
            <Carousel.Caption className="mb-4">
              <h3><Image src={project.logo}></Image> {project.title}</h3>
              <p>{project.functionality}</p>
              <Button variant="light" href={project.link} target="_blank" rel="noreferrer">{project.linkText}</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            key={project.madeWith}
          >
            <img
              className="carousel-image"
              src={project.image2}
              alt="Not appearing"
            />
            <Carousel.Caption className="mb-4">
              <h3><Image src={project.logo}></Image> {project.title}</h3>
              <p>{project.madeWith}</p>
              <Button variant="light" href={project.link} target="_blank" rel="noreferrer">{project.linkText}</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    });
  };

  return (
    <Container className="p-0">
      {generateCarousels()}
    </Container>
  );
}

export default MyProjects;

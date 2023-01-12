import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Links() {

  return (
    <>
      <Link id="navlink" className="btn centered" to="/portfolio">Home</Link>
      <Link id="navlink" className="btn centered" to="/portfolio/my-projects">My Projects</Link>
      <Button className="centered" href="https://github.com/danmsto">My GitHub</Button>
      <Button className="centered" href="https://linkedin.com/in/danmsto">My LinkedIn</Button>
    </>

  )
}

export default Links;
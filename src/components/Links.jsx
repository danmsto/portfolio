import githubIcon from "../content/github.png"
import linkedinIcon from "../content/linkedin.png"

function Links() {

  return (
    <>
      <a href="https://github.com/danmsto" className="linkText"><img src={githubIcon} className="linkImg" alt="GitHub Logo"/>Github</a>
      <a href="https://linkedin.com/in/danmsto" className="linkText"><img src={linkedinIcon} className="linkImg" alt="LinkedIn Logo"/>LinkedIn</a>
    </>
    )
};

export default Links;
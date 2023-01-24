import githubIcon from "../content/github.png"
import linkedinIcon from "../content/linkedin.png"

function Links() {

  return (
    <>
      <a href="https://github.com/danmsto" className="linkText" target="_blank" rel="noreferrer"><img src={githubIcon} className="linkImg" alt="GitHub Logo"/>GitHub</a>
      <a href="https://linkedin.com/in/danmsto" className="linkText" target="_blank" rel="noreferrer"><img src={linkedinIcon} className="linkImg" alt="LinkedIn Logo"/>LinkedIn</a>
    </>
    )
};

export default Links;
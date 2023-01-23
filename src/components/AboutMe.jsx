import { Accordion } from "react-bootstrap";
import content from "../content/content";
import ExperienceBulletPoints from "./ExperienceBulletPoints";

function AboutMe() {

  return (
    <>
      <Accordion defaultActiveKey="Full Stack Developer Student">
        {content.experience.map((experience) => {
          return (
            <Accordion.Item eventKey={experience.heading} key={experience.heading}>
              <Accordion.Header>
                <img src={experience.image} alt={experience.heading} height={48} width={48} />
                {experience.heading}
              </Accordion.Header>
              <Accordion.Body>
                {experience.location}{"\n\n"}
                <ExperienceBulletPoints bulletPoints={experience.bulletPoints} />
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
      <img className="codewarsImg" alt="Codewars" src="https://www.codewars.com/users/danmsto/badges/large" />
    </>
  )

};

export default AboutMe;
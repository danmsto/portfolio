import { Accordion } from "react-bootstrap";
import content from "../content/content";
import ExperienceBulletPoints from "./ExperienceBulletPoints";

function AboutMe() {

  return (
    <>
      <Accordion defaultActiveKey="Full Stack Software Development Student">
        {content.experience.map((experience) => {
          return (
            <Accordion.Item eventKey={experience.heading} key={experience.heading}>
              <Accordion.Header>
                <img src={experience.image} alt={experience.heading} height={48} width={48} />
                {experience.location}&emsp;<em>{experience.dates}</em>
              </Accordion.Header>
              <Accordion.Body>
                <strong>{experience.heading}</strong>
                <ExperienceBulletPoints bulletPoints={experience.bulletPoints} />
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </>
  )

};

export default AboutMe;
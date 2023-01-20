import yorkimage from "./universityofyork.png";
import infineumimage from "./infineum.png";
import eyupimage from "./eyup.png";


const content = {
  siteHeader: "Daniel Stoddart",
  siteSubheader: "Coding Academy Graduate & Former Industrial R&D Chemist",
  homeHeading: "Recent Graduate of the EyUp Skills Full Stack Development Bootcamp",
  homeBody: "Target-oriented team player who delivers to a high standard and works well under pressure,"
  +" has delivered impactful projects within budget and to deadline, and has a proven track record of process and systems improvement."
  +" Quick learner keen to gain new skills and expand knowledge.",
  experienceIntro: "Here is a brief overview of my experience",
  experience: [
    {
      heading: "Full Stack Developer Student",
      bulletPoints: [
        "Software Development bootcamp launched by David Richards MBE, CEO of WANdisco, plc., in partnership with IO Academy",
        "• Building functional Web Apps as part of Project Teams using Scrum methodology with Continuous Integration and Integration Testing",
        "• Running Unit Testing using Jest/JUnit frameworks and API Endpoint testing using Insomnia and Postman API Platforms",
        "• Producing a Hot-desk Booking App using the MERN stack, Java, the Spring application framework, and JPA for managing relational data",
        "• Structuring APIs in accordance to REST constraints",
        "• Applying the MERN stack to make a Food Ordering App",
        "• Managing source code using Git and GitHub repositories",
        "• Learning back-end tools with Node.js, Express, Maven, and MongoDB",
        "• Producing a Score Tracking Web App using JavaScript and HTML/CSS",
        "• Building a Text Adventure Game fully in Java",
        "• Using MySQL Relational Databases to structure example databases on Library Loans and Social Media Posts"
      ],
      image: eyupimage,
      location: "EyUp Skills Ltd",
      dates: "2022"
    }, {
      heading: "Industrial R&D Chemist",
      bulletPoints: [
        "• Designing and executing experimental programmes in external labs across Europe and North America for novel Product Development as well as performing proprietary experimentation for data generation",
        "• Processing test data using JMP Statistical Modelling software",
        "• Providing customer technical support for Daimler AG and later on the Shell International Account",
        "• Managing projects in Product Development, Test Problem Understanding and Solution, and Systems Improvement while managing stakeholder expectations and budgets up to £200,000",
        "• Authoring two published Technical Reports"
      ],
      image: infineumimage,
      location: "Infineum UK Ltd",
      dates: "2018-2022"
    }, {
      heading: "MChem Student",
      bulletPoints: [
        "• First-class MChem in Chemistry degree awarded",
        "• Master’s Project in Synthetic Chemistry under Prof Peter O’Brien"
      ],
      image: yorkimage,
      location: "The University of York",
      dates: "2014-2018"
    }
  ]


};

export default content;
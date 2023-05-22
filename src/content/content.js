import badgeDealer from "./badgeDealer";

const content = {
  siteHeader: "Daniel Stoddart",
  siteSubheader: "Coding Academy Graduate & Former Industrial R&D Chemist",
  siteHeaders: {
    name: "Daniel Stoddart",
    uni: "MChem in Chemistry",
    rnd: "Former Industrial R&D Chemist",  
    cod: "Coding Academy Graduate",
    dev1: "Graduate Software Developer"
  },
  homeHeading: "Graduate of the EyUp Full Stack Development Academy from the December 2022 cohort",
  homeBody: "Target-oriented team player who delivers to a high standard and works well under pressure,"
  +" has delivered impactful projects within budget and to deadline, and has a proven track record of process and systems improvement."
  +" Quick learner keen to gain new skills and expand knowledge.",
  experienceIntro: "Here is a brief overview of my experience",
  experience: [
    {
      heading: "Graduate Software Developer",
      subtitle: "Low Code Automation consultancy and software company",
      bulletPoints: [
        "TypeScript and .NET",
        "Building B2B Service Automation Software",
        "Event-driven Architecture"
      ],
      image: badgeDealer.ferrio,
      location: "Ferrio Ltd",
      dates: "2023-date"
    }, {
      heading: "Full Stack Software Development Student",
      subtitle: "Software Development bootcamp launched by Sheffield-based firm WANdisco",
      bulletPoints: [
        "Building functional Web Apps as part of Project Teams using Scrum methodology with Continuous Integration and Integration Testing",
        "Running Unit Testing using Jest/JUnit frameworks and API Endpoint testing using Insomnia and Postman API Platforms",
        "Producing a Hot-desk Booking App using the MERN stack, Java, the Spring application framework, and JPA for managing relational data",
        "Structuring APIs in accordance to REST constraints",
        "Applying the MERN stack to make a Food Ordering App",
        "Managing source code using Git and GitHub repositories",
        "Learning back-end tools with Node.js, Express, Maven, and MongoDB",
        "Producing a Score Tracking Web App using JavaScript and HTML/CSS",
        "Building a Text Adventure Game fully in Java",
        "Using MySQL Relational Databases to structure example databases on Library Loans and Social Media Posts"
      ],
      image: badgeDealer.eyup,
      location: "EyUp Skills Ltd",
      dates: "2022"
    }, {
      heading: "Industrial R&D Chemist",
      subtitle: "World-leading Engine Oil Additives and Specialty Chemicals company",
      bulletPoints: [
        "Designing and executing experimental programmes in external labs across Europe and North America for novel Product Development as well as performing proprietary experimentation for data generation",
        "Processing test data using JMP Statistical Modelling software",
        "Providing customer technical support for Daimler AG and later on the Shell International Account",
        "Managing projects in Product Development, Test Problem Understanding and Solution, and Systems Improvement while managing stakeholder expectations and budgets up to £200,000",
        "Authoring two published Technical Reports"
      ],
      image: badgeDealer.infineum,
      location: "Infineum UK Ltd",
      dates: "2018-22"
    }, {
      heading: "Chemistry Student",
      subtitle: "MChem in Chemistry",
      bulletPoints: [
        "First-class degree awarded",
        "Master's Project in Synthetic Chemistry under Prof Peter O'Brien"
      ],
      image: badgeDealer.mchem,
      location: "The University of York",
      dates: "2014-18"
    }
  ]


};

export default content;

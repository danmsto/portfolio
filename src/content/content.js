import yorkimage from "./universityofyork.png";
import infineumimage from "./infineum.png";
import eyupimage from "./eyup.png";


const content = {
  siteHeader: "Daniel M Stoddart",
  siteSubheader: "EyUp Skills Developer Academy • Chemistry at The University of York",
  homeHeading: "Former Industrial Research & Development Chemist pursuing a career in Software Development",
  homeSubheading: "I am finishing the EyUp Skills Developer Academy Full Stack Bootcamp in December 2022",
  homeBody: "Welcome to my Portfolio site, which has been built using React Bootstrap and Javascript, enjoy!",
  aboutTitle: "About Me",
  aboutPersonal: `I grew up in Sheffield and attended the University of York and completed a Masters Degree in Chemistry.
     After University I entered the Private Sector in Engine Oil Additives with Infineum UK Ltd in Oxfordshire, a joint venture between Shell and ExxonMobil,
     before making the decision to change career paths and enter Software Development with a place at the EyUp Skills Developer Academy`,
  experienceIntro: "Here is a brief overview of my experience",
  experience: [
    {
      heading: "Full Stack Developer Student",
      body: `16 weeks experience with HTML, CSS, JavaScript, React, 
      React Bootstrap, Java, OOP, Express, Spring Boot, etc.`,
      image: eyupimage,
      location: "EyUp Skills Ltd",
      dates: "2022"
    }, {
      heading: "Industrial R&D Chemist",
      body: `Worked within Product Development and in the Shell International 
      Account, with two internal technical publications, on synergistic 
      interactions of detergents and antioxidant componentry, and on 
      the industry-standard turbocharger deposits test`,
      image: infineumimage,
      location: "Infineum UK Ltd",
      dates: "2018-2022"
    }, {
      heading: "MChem Student",
      body: `I completed my MChem project on Fragment Elaboration Synthesis of 
      Functionalised Piperidines under Prof Peter O'Brien`,
      image: yorkimage,
      location: "The University of York",
      dates: "2014-2018"
    }
  ]


};

export default content;
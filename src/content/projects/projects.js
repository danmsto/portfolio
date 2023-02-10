import collectorImage from "./poolpool.jpg";
import collectorLogo from "./poolpoollogo.png";
import pizzaImage from "./doughjoe.jpg";
import pizzaLogo from "./doughjoepizzalogo.png";
import gameImage from "./sweetrelease.jpg";
import gameLogo from "./sweetreleaselogo.png";
import deskotechImage from "./deskotech.jpg";
import deskotechLogo from "./deskotechlogo.png";

const projects = [
  {
    title: "poolPool",
    description:
      "Tracker for Zero-sum 1-v-1 games (for desktop only)",
    madeWith: "Made using JS",
    link: "https://danmsto.github.io/poolPool/",
    linkText: "Have a Look!",
    image: collectorImage,
    logo: collectorLogo
  },
  {
    title: "DoughJoe Pizza",
    description: "A mock pizza vendor website, made alongside the rest of my EyUp Skills cohort",
    madeWith: "Made using JS, React Boot, and Axios",
    link: "https://danmsto.github.io/doughjoe-pizza",
    linkText: "Hungry?",
    image: pizzaImage,
    logo: pizzaLogo
  },
  {
    title: "Sweet Release",
    description: "A Text Adventure Game, made with the rest of the EyUp Skills Cohort",
    madeWith: "Made using Java",
    link: "https://replit.com/@danmsto/Sweet-Release?v=1",
    linkText: "Play",
    image: gameImage,
    logo: gameLogo
  }
  , {
    title: "Deskotech",
    description: "A Hot-desk Booking App, made with the rest of the EyUp Skills Cohort",
    madeWith: "Made using JS, Java, Spring Boot, JPA, JDBC, and MySQL",
    link: "https://github.com/danmsto/deskotech",
    linkText: "Check It Out",
    image: deskotechImage,
    logo: deskotechLogo
  }
];

export default projects;

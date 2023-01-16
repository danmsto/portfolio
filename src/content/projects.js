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
    link: "https://danmsto.github.io/poolPool/",
    linkText: "Have a Look!",
    image: collectorImage,
    logo: collectorLogo
  },
  {
    title: "DoughJoe Pizza",
    description: "A mock pizza vendor website, made alongside the rest of my EyUp Skills cohort",
    link: "https://danmsto.github.io/doughjoe-pizza",
    linkText: "Hungry?",
    image: pizzaImage,
    logo: pizzaLogo
  },
  {
    title: "Sweet Release",
    description: "A Text Adventure Game, made with the rest of the EyUp Skills Cohort",
    link: "https://replit.com/@danmsto/Sweet-Release?v=1",
    linkText: "Play",
    image: gameImage,
    logo: gameLogo
  }
  , {
    title: "Deskotech",
    description: "A Hot-desk Booking App, made with the rest of the EyUp Skills Cohort",
    link: "https://danmsto.github.io/deskotech",
    linkText: "Try Tt Out",
    image: deskotechImage,
    logo: deskotechLogo
  }
];

export default projects;

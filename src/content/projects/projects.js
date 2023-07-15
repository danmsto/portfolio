import collectorImage from "./poolpool.jpg";
import collectorImage1 from "./poolpool1.png";
import collectorImage2 from "./poolpool2.png";
import collectorLogo from "./poolpoollogo.png";
import pizzaImage from "./doughjoe.jpg";
import pizzaImage1 from "./doughjoe1.png";
import pizzaImage2 from "./doughjoe2.png";
import pizzaLogo from "./doughjoepizzalogo.png";
import gameImage from "./sweetrelease.jpg";
import gameImage1 from "./sweetrelease1.png";
import gameImage2 from "./sweetrelease2.png";
import gameLogo from "./sweetreleaselogo.png";
import deskotechImage from "./deskotech.jpg";
import deskotechImage1 from "./deskotech1.png";
import deskotechImage2 from "./deskotech2.png";
import deskotechLogo from "./deskotechlogo.png";

const projects = [
  {
    title: "poolPool",
    description: "Tracker for Zero-sum 1-v-1 games (for desktop only)",
    functionality:
      "This web app tracks Wins and Losses for different players, as well as providing ranking functionality to rank by Win % and total Wins, entries are editable and the list of players is stored between sessions",
    madeWith: "Made using JS",
    link: "https://danmsto.github.io/poolPool/",
    linkText: "Have a Look!",
    image: collectorImage,
    image1: collectorImage1,
    image2: collectorImage2,
    logo: collectorLogo,
  },
  {
    title: "DoughJoe Pizza",
    description:
      "A mock pizza vendor website, made alongside the rest of my EyUp Skills cohort",
    functionality:
      "This mock B2C web app for 'Dough Joe Pizza' provides a customisable pizza menu, nutrition calculation functionality, a persistent shopping basket, and the ability to review orders made",
    madeWith: "Made using JS, React Boot, and Axios",
    link: "https://danmsto.github.io/doughjoe-pizza",
    linkText: "Hungry?",
    image: pizzaImage,
    image1: pizzaImage1,
    image2: pizzaImage2,
    logo: pizzaLogo,
  },
  {
    title: "Deskotech",
    description:
      "A Hot-desk Booking App, made with the rest of the EyUp Skills Cohort",
    functionality:
      "This app provides desk booking functionality on a per-day basis, with limits on regular users and additional permissions for admins. The desk layout is visual and interactive to make selection clearer.",
    madeWith: "Made using JS, Java, Spring Boot, JPA, JDBC, and MySQL",
    link: "https://github.com/danmsto/deskotech",
    linkText: "Check It Out",
    image: deskotechImage,
    image1: deskotechImage1,
    image2: deskotechImage2,
    logo: deskotechLogo,
  },
  {
    title: "Sweet Release",
    description:
      "A Text Adventure Game, made with the rest of the EyUp Skills Cohort",
    functionality:
      "A fully Java game, this produces a pop up window in which you can see the game text, input your commands, and have a map of your location on the ship as well as previously explored locations. Player actions can impact accessible areas.",
    madeWith: "Made using Java",
    link: "https://replit.com/@danmsto/Sweet-Release?v=1",
    linkText: "Play",
    image: gameImage,
    image1: gameImage1,
    image2: gameImage2,
    logo: gameLogo,
  },
];

export default projects;

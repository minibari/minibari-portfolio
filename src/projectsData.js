import penaltyKickImg from './assets/img/penaltykick.png'
import canonImg from './assets/img/canon.png'
import mvcImg from './assets/img/mvc.png'

export const projectsData = [
  {
    title: "Football penalty kick",
    link: "https://jspenaltykickgame.netlify.app/",
    description: "JS game with collision detection",
    img: penaltyKickImg,
  },
  {
    title: "Arsenal minimal API",
    link: "https://minibari.github.io/Arsenal/",
    description: "My backend in .NET consumes WEB API from football-data.org and provide it for a frontend in React",
    img: canonImg,
  },
  {
    title: "MVC app ",
    link: "https://minibari.github.io./minibari-portfolio",
    description: "with authentication and authorization + DB, I already made 1 with DevExtreme scaffolding but I want to make my own from scratch, which I will use for fees management in a football club",
    img: mvcImg,
  }
];


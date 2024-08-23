import cashFlowImg from "../img/cashflow.png";
import gameImg from "../img/game.png";
import webMoviesImg from "../img/webMovies.png";
import stayUpdateImg from "../img/stayUpdate.png";
import blogImg from "../img/blog.png";
import foodImg from "../img/food.png";
import batatabitImg from "../img/batatabit.png";
import randomCatImg from "../img/randomCats.png";

export let portfolioData= [
  {
    linkName: "projects",
    slug: "projects",
    projects: [
      {
        title: "game",
        text: "escape from a mine maze",
        img: gameImg,
      },
      {
        title: "cashflow",
        text: "website where you will manage your expenses and profits",
        img: cashFlowImg,
      },
      {
        title: "webMovies",
        text: "It is a website for watching movies that are your favorites",
        img: webMoviesImg,
      },
    ],
  },
  {
    linkName: "design",
    slug: "design",
    projects: [
      { title: "stayUpdated!", text: "form design", img: stayUpdateImg },
      {
        title: "blog",
        text: "design with css and html of a blog",
        img: blogImg,
      },
      { title: "food item", text: "food website", img: foodImg },
      {
        title: "batatabit",
        text: "cryptocurrency information website",
        img: batatabitImg,
      },
    ],
  },
  {
    linkName: "others",
    slug: "others",
    projects: [
      {
        title: "catWeb",
        text: "see random images of cats",
        img: randomCatImg,
      },
    ],
  },
];

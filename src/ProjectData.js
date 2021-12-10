import Lighting3dWebgl2 from "./img/Project-Images/Lighting3dWebgl2.png";
import AstarMtStHelens from "./img/Project-Images/AstarMtStHelens.png";
import PumpkinChad from "./img/Project-Images/PumpkinChad.png";

const projectData = [
  {
    web: {
      title: "Webgl2 Shader Project with Lighting",
      description:
        "A Webgl2 project from the ground up to present the differences between Wireframe, Flat, Gouraud, and Phong Shading techniques.",
      link: "https://www.youtube.com/",
      img: Lighting3dWebgl2,
    },
    game: {
      title: "Astar Algorithm",
      description:
        "Used the famous AStar pathfinder algorithm to navigate Mt St Helens in 272ms with a path cost of roughly 548.4 uncovered units.",
      link: "https://www.youtube.com/",
      img: AstarMtStHelens,
    },
    state: true,
  },
  {
    web: {
      title: "Project 2",
      description: "Web Description",
      link: "https://www.youtube.com/",
      img: null,
    },
    game: {
      title: "Pumpkin Chad The Haunting",
      description: `
        This is a refined version of a game that was created during a game jam with friends. The original version should be v1.0. I decided to take that game and fixed most of the game breaking bugs.

        Contributions:
        -All code was done by Jeren
        -Sprite and cut scene art done by Rashid and Jaleeya
        -Background and menu art done by Cameron

        Current version v1.1
      `,
      link: "https://github.com/JerenRaquel/Pumpkin-Chad-Source-Code",
      route: "/Pumpkin-Chad-The-Haunting",
      img: PumpkinChad,
    },
    state: false,
  },
  {
    web: {
      title: "Project 3",
      description: "Web Description",
      link: "https://www.youtube.com/",
      img: null,
    },
    game: {
      title: "Project 3",
      description: "Game Description",
      link: "https://www.youtube.com/",
      img: null,
    },
    state: false,
  },
];

export default projectData;

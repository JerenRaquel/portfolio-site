import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import DescriptionBox from "../components/DescriptionBox";

import Lighting3dWebgl2 from "../img/Project-Images/Lighting3dWebgl2.png";
import AstarMtStHelens from "../img/Project-Images/AstarMtStHelens.png";

import derp from "../img/derp.png";

const Project = () => {
  const classes = styles();

  const [data, setData] = useState({
    ID: 0,
    Data: [
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
          title: "Project 2",
          description: "Game Description",
          link: "https://www.youtube.com/",
          img: null,
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
    ],
  });

  const [buttonData, setButtonData] = useState(true);

  const swapDataEntryTo = (state, index) => {
    const dataCopy = {
      ID: index,
      Data: [...data.Data],
    };
    dataCopy.Data.map((v, i) => {
      const b = i === index ? state : false;
      const copy = v;
      copy.state = b;
      return copy;
    });
    setData(dataCopy);
  };

  const swapButtonData = (isWeb) => {
    if (isWeb && !buttonData) {
      setButtonData(true);
    } else if (!isWeb && buttonData) {
      setButtonData(false);
    }
    swapDataEntryTo(true, 0);
  };

  const propData = (struct) => {
    const webData = struct.web;
    const gameData = struct.game;
    if (buttonData) {
      return { ...webData };
    } else {
      return { ...gameData };
    }
  };

  const currentImg = data.Data[data.ID][buttonData ? "web" : "game"].img;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.buttonContainer}>
        <button
          className={`${classes.button} ${buttonData ? classes.highlight : ""}`}
          onClick={() => swapButtonData(true)}
        >
          Web Dev Projects
        </button>
        <button
          className={`${classes.button} ${
            !buttonData ? classes.highlight : ""
          }`}
          onClick={() => swapButtonData(false)}
        >
          Game Dev Projects
        </button>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.descriptionContainer}>
          {data.Data.map((v, i) => {
            return (
              <DescriptionBox
                key={i}
                {...propData(v)}
                chosen={data.Data[i].state}
                enterf={(_) => swapDataEntryTo(true, i)}
              />
            );
          })}
        </div>
        <img
          className={classes.img}
          src={currentImg ? currentImg : derp}
          alt=""
        />
      </div>
    </div>
  );
};

const styles = makeStyles({
  img: {
    marginLeft: "25px",
    width: "55%",
    height: "41.25%",
    margin: "auto",
    borderRadius: "25px",
  },
  button: {
    margin: "0 1em",
    padding: "1em 2em",

    backgroundColor: "#231f8f",
    border: "none",
    borderRadius: "25px",

    color: "#8a58f6",
    fontWeight: "bold",
  },
  highlight: {
    color: "#5895f6",
  },
  mainContainer: {
    width: "100%",
    height: "100vh",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  descriptionContainer: {},
  contentContainer: {
    display: "flex",

    marginTop: "25px",
  },
});

export default Project;

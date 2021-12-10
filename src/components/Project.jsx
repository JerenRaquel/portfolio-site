import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import DescriptionBox from "./DescriptionBox";

import projectData from "../ProjectData";

import derp from "../img/derp.png";

const Project = () => {
  const classes = styles();

  const [data, setData] = useState({
    ID: 0,
    Data: projectData,
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
    marginBottom: "20em",

    width: "100%",
    height: "100%",
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

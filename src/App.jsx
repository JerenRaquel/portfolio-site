import React, { useRef } from "react";
import { makeStyles } from "@material-ui/styles";

import Project from "./pages/Project";
import About from "./pages/About";
import NavContainer from "./components/NavContainer";

const App = () => {
  const classes = style();
  const refs = [
    {
      ref: useRef(null),
      name: "Home",
    },
    {
      ref: useRef(null),
      name: "Projects",
    },
    {
      ref: useRef(null),
      name: "About Me",
    },
  ];

  return (
    <>
      <NavContainer refs={refs}/>
      {/* Title */}
      <div className={classes.container} ref={refs[0].ref}>
        <h1 className={`${classes.centerText} ${classes.h1}`}>Jeren Raquel</h1>
        <h2 className={`${classes.centerText} ${classes.h2}`}>
          Web & Game Developer
        </h2>
      </div>

      {/* Projects */}
      <div ref={refs[1].ref}>
        <h1 className={`${classes.centerText} ${classes.h2}`}>Projects</h1>
        <Project />
      </div>

      {/* About me page */}
      <div className={classes.aboutMeContainer} ref={refs[2].ref}>
        <h1 className={`${classes.centerText} ${classes.h2}`}>About Me</h1>
        <About />
      </div>
    </>
  );
};

const style = makeStyles({
  h1: {
    fontSize: "500%",
    color: "#7658F6",
  },
  h2: {
    fontSize: "300%",
  },
  centerText: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100vh",
  },
  aboutMeContainer: {
    width: "100%",
    height: "100vh",
  },
});

export default App;

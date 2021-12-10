import { makeStyles } from "@material-ui/styles";
import Unity, { UnityContent } from "react-unity-webgl";

const UnityGame = ({ name, gamePath }) => {
  const classes = style();

  const path = process.env.PUBLIC_URL + gamePath;
  const data = [path + "/Builds.json", path + "/UnityLoader.js"];
  console.log(...data);

  const ctx = new UnityContent(...data);

  return (
    <div className={classes.container}>
      <a className={classes.button} href="/" rel="noreferrer">
        <h2>Home</h2>
      </a>
      <h3>{name}</h3>
      <Unity className={classes.webglContainer} unityContent={ctx} />
    </div>
  );
};

const style = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: "#7658F6",
    fontWeight: "bold",
    fontSize: "90%",

    textDecoration: "none",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  webglContainer: {
    margin: "0 auto",
    maxWidth: "1600px",
    maxHeight: "900px",
  },
});

export default UnityGame;

import { makeStyles } from "@material-ui/styles";
import picture from "../img/Jeren Raquel.png";

const About = () => {
  const classes = style();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={picture} alt="" />
      <div>
        <h1>Jeren Raquel</h1>
        <div className={classes.description}>
          &emsp; I'm a student in Computer Science that loves to learn new
          programming frameworks, ideas, and tricks with every new project. I've
          started programming by creating prototype games where I would always
          learn a new component such as inventory management to pathfinding
          algorithms. Currently, I've started to learn web development tools and
          frameworks like react, SQL, webgl2 and threeJS. I'm always looking for
          new ideas to try and older ideas to recreate in my own time.
        </div>
      </div>
    </div>
  );
};

const style = makeStyles({
  img: {
    margin: "50px",
    maxWidth: "300px",
    borderRadius: "50%",
  },
  container: {
    display: "flex",

    margin: "auto 100px",
    marginRight: "150px",

    borderRadius: "25px",
    backgroundColor: "#1F293A",
  },
  description: {
    // maxWidth: "40em",
    margin: "0 5em",
    color: "#7d8aa1",
    fontSize: "1.2em",
  },
});

export default About;

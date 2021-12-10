import { makeStyles } from "@material-ui/styles";
import githubImg from "../img/Github_light.png";
import ScrollAnimation from "react-animate-on-scroll";
import ImageButtonLink from "./ImageButtonLink";

const DescriptionBox = ({ title, description, link, chosen, enterf }) => {
  const classes = style({
    opacity: chosen ? 1 : 0.5,
    open: chosen ? "visable" : "hidden",
  })();

  return (
    <ScrollAnimation animateIn="fadeInLeft">
      <div className={classes.boxContainer} onMouseEnter={enterf}>
        <div className={classes.dataContainer}>
          <h3>{title}</h3>
          <p className={classes.descriptionText}>{description}</p>
        </div>
        <ImageButtonLink image={githubImg} link={link} imgSize={50} />
      </div>
    </ScrollAnimation>
  );
};

const style = (props) =>
  makeStyles((_) => ({
    button: {
      maxWidth: "50px",
      maxHeight: "50px",
      marginTop: "10px",

      textDecoration: "none",
    },
    img: {
      maxWidth: "40px",
      maxHeight: "40px",
    },
    descriptionText: {
      color: "#545E6F",
    },
    boxContainer: {
      display: "flex",
      justifyContent: "space-between",

      maxWidth: "25em",
      padding: "10px 20px",
      margin: "2em 0",
      marginLeft: "5em",
      borderRadius: "25px",

      backgroundColor: "#1F293A",

      opacity: props.opacity,
    },
    dataContainer: {
      display: "flex",
      flexDirection: "column",

      midth: "20em",
      minHeight: props.open === "visable" ? "180px" : "10em",

      overflow: props.open,
    },
  }));

export default DescriptionBox;

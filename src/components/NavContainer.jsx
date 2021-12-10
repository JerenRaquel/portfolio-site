import { makeStyles } from "@material-ui/styles";
import githubImg from "../img/Github_purple.png";
import ImageButtonLink from "./ImageButtonLink";

const scrollTo = (ref) => {
  window.scrollTo(0, ref.current.offsetTop);
};

const NavContainer = ({ refs }) => {
  const classes = style();

  return (
    <div className={classes.navContainer}>
      {refs.map((v, i) => {
        return (
          <button
            key={i}
            className={classes.button}
            onClick={() => scrollTo(v.ref)}
          >
            <p>{v.name}</p>
          </button>
        );
      })}
      <ImageButtonLink
        image={githubImg}
        link="https://github.com/JerenRaquel"
        imgSize={50}
        isCentered={true}
      />
    </div>
  );
};

const style = makeStyles({
  img: {
    maxWidth: "40px",
    maxHeight: "40px",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: "#7658F6",
    fontWeight: "bold",
    fontSize: "100%",
  },
  gitButton: {
    maxWidth: "50px",
    maxHeight: "50px",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",

    textDecoration: "none",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",

    position: "fixed",
    marginLeft: "92.5%",
    marginTop: "2em",
    zIndex: 2,
  },
});

export default NavContainer;

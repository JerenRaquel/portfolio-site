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
          &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl
          suscipit adipiscing bibendum est ultricies integer. Vitae et leo duis
          ut diam quam nulla porttitor. Ac feugiat sed lectus vestibulum mattis
          ullamcorper velit. Nisl tincidunt eget nullam non nisi est sit amet
          facilisis. Tempor orci eu lobortis elementum nibh tellus. Nibh mauris
          cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id
          consectetur purus ut faucibus. Adipiscing at in tellus integer.
          Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sem
          et tortor consequat id porta nibh venenatis. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Amet commodo nulla facilisi
          nullam vehicula ipsum a. Sodales neque sodales ut etiam sit amet nisl.
          Vitae ultricies leo integer malesuada nunc vel risus. Quam nulla
          porttitor massa id neque aliquam.
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
    maxWidth: "40em",
    color: "#545E6F",
  },
});

export default About;

import { makeStyles } from "@material-ui/styles";

const ImageButtonLink = ({
  image,
  link,
  imgSize,
  isCentered,
  openNewPage = true,
}) => {
  const classes = style({
    buttonSize: String(imgSize),
    imgSize: String(imgSize - 10),
    lrMargins: isCentered ? "auto" : "0px",
  })();

  return (
    <a
      className={classes.button}
      href={link}
      target={openNewPage ? "_blank" : ""}
      rel="noreferrer"
    >
      <img className={classes.img} src={image} alt="" />
    </a>
  );
};

const style = (props) =>
  makeStyles((_) => ({
    img: {
      maxWidth: props.imgSize + "px",
      maxHeight: props.imgSize + "px",
    },
    button: {
      maxWidth: props.buttonSize + "px",
      maxHeight: props.buttonSize + "px",
      marginTop: "10px",
      marginLeft: props.lrMargins,
      marginRight: props.lrMargins,

      textDecoration: "none",
    },
  }));

export default ImageButtonLink;

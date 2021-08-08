import { makeStyles } from '@material-ui/styles'

const About = () => {
  const classes = style();
  return (
    <div className={classes.text}>
      About
    </div>
  )
}

const style = makeStyles({
  text: {
    color: "#f2f4ff",
    fontWeight: "bold"
  }
})

export default About;

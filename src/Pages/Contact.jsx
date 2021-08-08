import { makeStyles } from '@material-ui/styles'

const Contact = () => {
  const classes = style();
  return (
    <div className={classes.text}>
      Contact
    </div>
  )
}

const style = makeStyles({
  text: {
    color: "#f2f4ff",
    fontWeight: "bold"
  }
})

export default Contact;

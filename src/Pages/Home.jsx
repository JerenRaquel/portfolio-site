import { makeStyles } from '@material-ui/styles'

const Home = () => {
  const classes = style();
  return (
    <div className={classes.text}>
      Home
    </div>
  )
}

const style = makeStyles({
  text: {
    color: "#f2f4ff",
    fontWeight: "bold"
  }
})

export default Home;

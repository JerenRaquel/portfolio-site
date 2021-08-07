import { makeStyles } from '@material-ui/styles'

function App() {
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.navBar}>
          <div className={classes.items}>Home</div>
          <div className={classes.items}>Projects</div>
          <div className={classes.items}>About</div>
          <div className={classes.items}>Contact</div>
        </div>
      </div>
    </>
  );
}

const styles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  navBar: {
    display: "flex",
    maxWidth: 600,
    marginTop: "2em"
  },
  items: {
    margin: "0 1em"
  }
})

export default App;

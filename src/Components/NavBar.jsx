import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"

const NavBar = ({ navItems }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        {
          navItems.map((name,i) => (
            <div 
              key={i}
              className={classes.items}
            > 
              <Link 
                to={`/${name}`}
                className={classes.button}
              >
                <p className={classes.text}>
                  {name} 
                </p>
              </Link>
            </div>
        ))}
      </div>
    </div>
  )
}

const styles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em"
  },
  navBar: {
    display: "flex",
    // maxWidth: 600,
    padding: "1em 10em",
    backgroundColor: "#364652",
    borderRadius: "12.5px"
  },
  items: {
    margin: "0 1em",
  },
  button: {
    textDecoration: "none"
  },
  text: {
    color: "#f2f4ff",
    fontWeight: "bold"
  }
})

export default NavBar;

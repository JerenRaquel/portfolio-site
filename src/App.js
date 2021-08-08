import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const navItems = ["Home", "Projects", "About", "Contact"];
  const classes = Main();

  return (
    <>
      <Router>
        <div className={classes.background}>
          <NavBar navItems={navItems} />
        </div>

        <Redirect to="/Home" />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    </>
  );
};

const Main = makeStyles({
  background: {
    position: "absolute",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#93acb5",
  },
});

export default App;

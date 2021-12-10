import { BrowserRouter as Router, Route } from "react-router-dom";
import Hub from "./pages/Hub";
import UnityGame from "./pages/UnityGame";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Hub} />
        <Route exact path="/portfolio-site" component={Hub} />
        <Route
          exact
          path="/Pumpkin-Chad-The-Haunting"
          render={(props) => (
            <UnityGame
              {...props}
              name={"Pumpkin Chad The Haunting"}
              gamePath={"/externalWebsites/Pumpkin-Chad-The-Haunting"}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;

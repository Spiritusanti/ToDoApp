// library imports
import { Redirect, Route, Switch } from "react-router";
// Page imports
import Tasks from "./pages/Tasks.page";
import Welcome from "./pages/Welcome.page";
import Profile from "./pages/Profile.page";
// Component imports
import Header from "./components/UI/Header/Header.component";
// styles imports
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

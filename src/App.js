// library imports
import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
// Page imports
import Tasks from "./pages/Tasks.page";
import Welcome from "./pages/Welcome.page";
import Profile from "./pages/Profile.page";
import AuthPage from "./pages/Auth.page";
// Component imports
import Header from "./components/UI/Header/Header.component";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.component";
// styles imports
import classes from "./App.module.scss";
import app from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { authActions } from "./redux/auth-slice";
import { Suspense } from "react";
import Spinner from "./components/UI/Spinner/Spinner.component";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (app.auth().currentUser) {
      const user = app.auth().currentUser;
      dispatch(authActions.userLogin(user));
      history.push("/tasks");
    }
    history.push("/");
  }, [dispatch, history]);

  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/signin">
              <AuthPage />
            </Route>
            <Route exact path="/tasks">
              <Tasks />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect to="/" />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;

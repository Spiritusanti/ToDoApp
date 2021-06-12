// library imports
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks";
import { Route, Switch } from "react-router";
// Page imports
import SplashPage from "./pages/SplashPage/SplashPage";
import ToDoPage from "./pages/ToDoPage/ToDoPage";
// Component imports
import Header from "./components/UI/Header/Header.component";
import Burger from "./components/menu/burger/Burger.component";
import Menu from "./components/menu/Menu/Menu.component";
// styles imports
import "./App.scss";

function App() {
  const [open, setOpen] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <Header />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          open={open}
          setOpen={setOpen}
          isSignedIn={isSignedIn}
          setisSignedIn={setisSignedIn}
        />
      </div>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/todo" component={ToDoPage} />
      </Switch>
    </div>
  );
}

export default App;

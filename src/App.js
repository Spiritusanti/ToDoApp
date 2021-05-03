// library imports
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from './hooks';
import { Route, Switch } from 'react-router';
// Page imports
import SplashPage from './pages/SplashPage/SplashPage';
import ToDoPage from './pages/ToDoPage/ToDoPage';
// Component imports
import Header from './components/Header/Header.component';
import Burger from './components/menu/burger/Burger.component';
import Menu from './components/menu/Menu/Menu.component';
// styles imports
import './App.scss';
import SignIn from './pages/SignIn/SignIn';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
    <Header />
    <div ref={node}>
      <Burger open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
    </div>
      <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/todo' component={ToDoPage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

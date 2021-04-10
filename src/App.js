// library imports
import React from 'react';
import { Route, Switch } from 'react-router';
// Page imports
import SplashPage from './pages/SplashPage/SplashPage';
import ToDoPage from './pages/ToDoPage/ToDoPage';
// Component imports
// styles imports
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/todo' component={ToDoPage} />
      </Switch>
    </div>
  );
}

export default App;

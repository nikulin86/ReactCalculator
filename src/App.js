import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Class from './Class';
import Hook from './Hook';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={Class} />
        <Route path={'/hook'} exact component={Hook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

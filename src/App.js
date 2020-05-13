import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import { history } from './helpers/history';
import { ProtectedRoute } from './helpers/protected.route';
import { connect } from 'react-redux';

function App() {
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change.
      // TODO: create a alert cleaner ( create alert actions in general )
        // use dispatch the alert cleaner action
    }) 
  }, []);

  return (
    <div className="App">
    <Router history = { history }>
      <Switch>
        <Route exact path='/' component={Home}/>
        <ProtectedRoute exact path='/main' component={Main}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

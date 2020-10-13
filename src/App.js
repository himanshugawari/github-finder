import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar.component';
import Alert from './components/layout/Alert.component';
import User from './components/users/User.component';
import About from './components/pages/About.component';

import Home from './components/pages/Home.component';
import NotFound from './components/pages/NotFound.component';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/user/:login' component={User} />
                <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import store from './redux/store';
import Header from './components/Header';
import { themed } from './HOC/themed/themed';

function App({ classes }) {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <Switch>
          <div className={classes.mainContainer}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <div className="App">
                <Login />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

const Application = ({ classes }) => (
  <Provider store={store}>
    <App classes={classes} />
  </Provider>
);

export default themed('app.Application', Application);

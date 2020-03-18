import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Input from './Input';
import Gifs from './Gifs';
import Arrow from './assets/left-arrow.png';

class App extends React.Component {

  render() {
    return (
      <div className="searcher">
        <Router>
          <NavLink exact to="/" activeClassName="searcher__back">
            <img className="searcher__back--arrow" alt="arrow" src={Arrow} />
          </NavLink>
          <Switch>
            <Route exact path="/">
              <Input />
            </Route>
            <Route path="/:url" component={Gifs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

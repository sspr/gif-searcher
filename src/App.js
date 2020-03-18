import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Input from './Input';
import Gifs from './Gifs';
import Arrow from './assets/left-arrow.png';

class App extends React.Component {
  render() {
    return (
      <div className="searcher">
        <Router>
          <Link to="/" className="searcher__back">
            <img className="searcher__back--arrow" alt="arrow" src={Arrow} />
          </Link>
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

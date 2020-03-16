import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Input from './Input';
import Gif from './Gifs';
import Arrow from './asstes\\left-arrow.png';

class App extends React.Component {

  clearPathname = () => {
    window.location.pathname = '/';
  };

  render() {
    return (
      <div className="searcher">
        <Router>
          <Switch>
            <Route exact path="/">
              <Input onSubmit={this.handleSubmit} />
            </Route>
            <Route path="/">
              <Link onClick={this.clearPathname} className="searcher__back">
                <img className="searcher__back--arrow" alt="arrow" src={Arrow} />
              </Link>
              <Gif />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

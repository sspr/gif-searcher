import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  Redirect
} from "react-router-dom";
import Input from './Input';
import Gif from './Gif';
import Arrow from "./left-arrow.png";

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleSubmit = (searchTerm) => {
    this.setState({ searchTerm });
  };

  emptySearchTerm = () => {
    this.setState({ searchTerm: '', });
  };


  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/">
            {this.state.searchTerm ? <Redirect to={`/${this.state.searchTerm}`} /> : <Input onSubmit={this.handleSubmit} />}
            </Route>
            <Route path={`/${this.state.searchTerm}`}>
              <Link onClick={this.emptySearchTerm} to="/" className="back"><img alt="arrow" src={Arrow}/></Link>
              <Gif searchTerm={this.state.searchTerm}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Searcher;

import React from 'react';
import PropTypes from 'prop-types';

const LIMIT = 10;
const copy = require('copy-text-to-clipboard');

class Gifs extends React.Component {
  state = {
    gifs: [],
    loading: 0,
  };

  componentDidMount() {
    this.searchGif();
  }

  handleSingleImgLoad = () => {
    this.setState(state => ({
      loading: state.loading + 1,
    }));
  };

  searchGif = () => {
    const queryUrl = `https://api.tenor.com/v1/search?key=${
      process.env.REACT_APP_TENOR_GIF_API_KEY
    }&tag=${window.location.pathname.substring(1, window.location.pathname.length)}&limit=${LIMIT}`;

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => {
        const gifs = data.results.map(gif => gif.media[0].gif.url);

        this.setState({ gifs });
      })
      .catch(() => {alert('error')});
  };

  render() {
    return (
      <div className="gifs">
        {this.state.loading < LIMIT && (
          <div className="gifs__spinner">
            <img alt="spinner" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
          </div>
        )}
        {this.state.gifs.map((gif, index) => (
          <div key={index}>
            <img
              className="gifs__gif"
              alt="This is gif"
              onLoad={() => this.handleSingleImgLoad()}
              onClick={event => copy(event.target.src)}
              src={gif}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Gifs;

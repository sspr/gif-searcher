import React from 'react';
import copy from 'copy-text-to-clipboard';

const LIMIT = 10;

class Gifs extends React.Component {
  state = {
    gifs: [],
    loading: 0,
    error: false,
  };

  componentDidMount() {
    this.searchGif();
  }

  handleSingleImgLoad = () => {
    this.setState(state => ({
      loading: state.loading + 1,
    }));
  };

  gifsRequest = async url => {
    const response = await fetch(url).catch(err => {
      throw new Error(err);
    });
    const data = await response.json();
    const gifs = await data.results.map(gif => gif.media[0].gif.url);
    this.setState({ gifs });
  };

  searchGif = () => {
    const queryUrl = `https://api.tenor.com/v1/search?key=${process.env.REACT_APP_TENOR_GIF_API_KEY}&tag=${this.props.match.params.url}&limit=${LIMIT}`;

    this.gifsRequest(queryUrl).catch(() => this.setState({ error: true }));
  };

  render() {
    return (
      <div className="gifs">
        {this.state.loading < LIMIT && !this.state.error && (
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
        {this.state.error && (
          <div className="gifs__error">
            An error occured. Please try again later. <br/><br/> Sorry for any inconvenience.
          </div>
        )}
      </div>
    );
  }
}

export default Gifs;

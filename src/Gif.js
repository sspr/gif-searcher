import React from 'react';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';


class Gif extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gifs: [],
      loading: 0
    };
  }

  handleSingleImgLoad = () => {
    this.setState((state) => ({
      loading : this.state.loading + 1
    }));
  }

  searchGif = () => {
    const query_url = `https://api.tenor.com/v1/search?key=${process.env.REACT_APP_TENOR_GIF_API_KEY}&tag=${this.props.searchTerm}&limit=10`;

    fetch(query_url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      let gifs = [];
      for ( let i = 0; i <= 9; i++) {
        gifs.push( myJson["results"][i]["media"][0]["gif"]["url"] );
      }

      gifs = gifs.map((gif, index) => 
        <div key={index}><img alt="This is gif" onLoad={() => this.handleSingleImgLoad()} onClick={(event) => copy(event.target.src)} src = {gif} /></div>
      );

      this.setState({ gifs });
    });

    return (this.state.gifs);
  };
 
  render() {
    return (
        <div className="container-gifs">
          { this.state.loading <= 9 && <div className="spinner-container"><img alt="spinner" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/></div> }
          { this.searchGif() }
        </div>
    );
  }
}

Gif.propTypes = {
  searchTerm: PropTypes.string
};

export default Gif;
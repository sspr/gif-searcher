import React, { useState, useEffect } from 'react';
import copy from 'copy-text-to-clipboard';

const LIMIT = 10;

function Gifs(props) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    searchGif();
  });

  function handleSingleImgLoad() {
    setLoading(loading + 1);
  }

  async function gifsRequest(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const recivedGifs = await data.results.map(gif => gif.media[0].gif.url);
      setGifs(recivedGifs);
    }
    catch {
      setError(true);
    }
  }

  function searchGif() {
    const queryUrl = `https://api.tenor.com/v1/search?key=${process.env.REACT_APP_TENOR_GIF_API_KEY}&tag=${props.match.params.url}&limit=${LIMIT}`;

    gifsRequest(queryUrl);

  return (
    <div className="gifs">
      {loading < LIMIT && !error && (
        <div className="gifs__spinner">
          <img alt="spinner" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
      )}
      {gifs.map((gif, index) => (
        <div key={index}>
          <img
            className="gifs__gif"
            alt="This is gif"
            onLoad={handleSingleImgLoad}
            onClick={event => copy(event.target.src)}
            src={gif}
          />
        </div>
      ))}
      {error && (
        <div className="gifs__error">
          An error occured. Please try again later. <br /><br /> Sorry for any inconvenience.
        </div>
      )}
    </div>
  );
}

export default Gifs;
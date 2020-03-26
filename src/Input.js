import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const [text, setText] = useState('');

  function handleEnterUp(event) {
    if (event.keyCode === 13) {
      props.history.push(text);
      setText('');
    }
  }

  return (
    <div className="input">
      <input
        className="input__input"
        placeholder="Search for gifs"
        type="text"
        value={text}
        onKeyUp={handleEnterUp}
        onChange={event => setText(event.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  onSubmit: PropTypes.func,
};

export default Input;
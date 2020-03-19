import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  state = {
    text: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleEnterUp = event => {
    if (event.keyCode === 13) {
      this.props.history.push(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div className="input">
        <input
          className="input__input"
          placeholder="Search for gifs"
          type="text"
          value={this.state.text}
          onKeyUp={this.handleEnterUp}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func,
};

export default Input;

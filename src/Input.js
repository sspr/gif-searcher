import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleEnterUp = event => {
    if (event.keyCode === 13) 
    {
      this.props.onSubmit(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div className="container">
        <input placeholder="What say you?" type="text" value={this.state.text} onKeyUp={this.handleEnterUp} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input;

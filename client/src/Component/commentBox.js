import React from 'react';
import '../commentBox.css'
class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      input: '',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A comment was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({
      input: this.state.value
    })
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="color">
            Comments:
            <input type="text" className='flex-item' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.input}</h1>
      </div>
  )};
}

export default CommentBox;

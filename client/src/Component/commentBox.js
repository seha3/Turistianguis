import React from 'react';
import axios from "axios";
import '../commentBox.css';

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

  abuFuction =() =>{
    console.log("inside of abu :");
    axios.get('//localhost:5000/url')
    .then( res => {
      console.log(res)
    })
    .catch( err =>{console.log( "error : ",err)})
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='h3'>
            Comments:
            <input type="text" className='comment' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" className= 'submit' value="Submit" />
        </form>
        <h1>{this.state.input}</h1>
        <button onClick={this.abuFuction}> thiis is my buttin</button>
      </div>
  )};
}

export default CommentBox;

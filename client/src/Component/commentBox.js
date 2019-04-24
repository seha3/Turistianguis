import React from 'react';
<<<<<<< HEAD
import axios from "axios";

import '../commentBox.css';

=======
import '../commentBox.css'
>>>>>>> 639d5bd8b75024ace402739c685cd3b5f3dacca0
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
<<<<<<< HEAD

  abuFuction =() =>{
    console.log("inside of abu :");
    axios.get("/endpoint")
    .then( res =>
      {console.log("resueste :", res)
    })
    .catch( err =>{console.log( "error : ",err)})
  }
=======
>>>>>>> 639d5bd8b75024ace402739c685cd3b5f3dacca0
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
<<<<<<< HEAD
        <button onClick={this.abuFuction}> thiis is my buttin</button>
=======
>>>>>>> 639d5bd8b75024ace402739c685cd3b5f3dacca0
      </div>
  )};
}

export default CommentBox;

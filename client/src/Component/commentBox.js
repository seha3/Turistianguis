import React, { Component } from 'react';
import axios from "axios";
import '../commentBox.css';

class CommentBox extends Component {
    state = {
      data: [],
      id: 0,
      message: null,
      name: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
  }

componentDidMount(){//as soon as comp is mounted it will fetch all existing data from db
    this.getDataFromDb();
    if(!this.state.intervalIsSet){
      let interval = setInterval(this.getDataFromDb, 1000);//polling logic to see that our db has changed
      this.setState({ intervalIsSet: interval});
    }
  }
componentWillUnmount(){
  if(this.state.intervalIsSet){
    clearInterval(this.state.intervalIsSet);
    this.setState({ intervalIsSet: null });
  }
}

//in the front end, we use id key of our data obj
//in order to identify which we want to update or delete
//in the back end we use the obj id assigned by mongoDB
//to modify db entries

//our first get method that uses our backed api
// grabs data from our db

getDataFromDb = () => {
  fetch("//localhost:5000/api/getData")
  .then(data => data.json())
  .then(res => this.setState({ data: res.data }));
};

//our put method that will use backend api to create a new query into our db
putDataToDB = (message, name) => {
  let currentIds = this.state.data.map(data => data.id);
  let idToBeAdded = 0;//create an id for the data that will be added
  while(currentIds.includes(idToBeAdded)){//increment as data is added
    ++idToBeAdded;
  }
  axios.post("//localhost:5000/api/putData", {
    id: idToBeAdded,
    message: message,
    name: name,
  });
};

deleteFromDB = idToDelete => {
  let objIdToDelete = null;
  this.state.data.forEach(dat => {
    if(dat.id === idToDelete){//map thru data and check if the id we want to delete matches and ids
      objIdToDelete = dat._id;
    }
  });

  axios.delete("//localhost:5000/api/deleteData", {//will send a delete request to delete that object
    data: {
      id: objIdToDelete
    }
  });
};

//this method will use our backend api to overwrite existing Data
updateDB = (idToUpdate, updateToApply) => {
  let objectToUpdate = null;
  this.state.data.forEach(dat => {
    if(dat.id == idToUpdate) {//will check id of obj to see if matches any ids in db
      objectToUpdate = dat._id;
    }
  });
  axios.post("//localhost:5000/api/updateData", {// will post and update that object
    id: objectToUpdate,
    update: { message: updateToApply }
  });

};


  render () {
    const { data } = this.state;
    return (
        <div>
      <div style={{ padding: "10px"}}>
            Add  Comment:
            <input
            type="text"
            className='comment'
            placeholder='Add comment'
            onChange={e => this.setState({ message: e.target.value })} />
            <button onClick={() => this.putDataToDB(this.state.message)}>
              add
            </button>
      </div>


        <ul>
          {data.length <= 0
          ? "No comments yet"
          : data.map(dat => (
            <li style={{ padding: "10px"}} key={data.message}>
          <span style={{ color: "gray"}}>Comment:</span>
        {dat.message}
            </li>
          ))
        }
        </ul>
      </div>
  )};
}

export default CommentBox;

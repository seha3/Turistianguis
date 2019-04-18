import React from 'react';

class Gerson extends React.Component{
  firstFunction(){
  console.log('sup')
}
  render(){
    return(
      <div>
        <div className="buttoncontainer">
          <button onClick={this.firstFunction}>  f </button>
        </div>
    </div>
  )}
}
export default Gerson;

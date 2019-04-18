import React from 'react';
import TypeWriter from 'react-typewriter';
import "../index.css"
class Typewriter extends React.Component {
  render () {
    return (
      //text
      <TypeWriter typing={1}><h3>Welcome! Are you ready to discover Mexico City's culture!.</h3> </TypeWriter>
    );

  }
}

export default Typewriter;

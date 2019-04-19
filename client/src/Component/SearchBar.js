import React from 'react';
import '../SearchBar.css'
class SearchBar extends React.Component {
  render () {
    return (
    <div id="cover">
      <form method="get" action="">
        <div class="tb">
          <div class="td"><input type="text" placeholder="Search" required/></div>
          <div class="td" id="s-cover">
            <button type="submit">
            <div id="s-circle"></div>
            <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )};
}

export default SearchBar;

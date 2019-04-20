import React from 'react';
import '../SearchBar.css'
class SearchBar extends React.Component {
  render () {
    return (
      <div class="wrap">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="Busca un tianguis"/>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
           </button>
         </div>
      </div>
  )};
}

export default SearchBar;

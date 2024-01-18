import React from 'react';
import './Search.css';
import SearchIcon from '../Icons/SearchIcon';

export default function Search(props) {
  return (
      <div id='search-container' class="input-group">
        <input
          type="text"
          id='searchInput'
          class="form-control"
          placeholder={props.placeholder}
          aria-label="Example input"
          aria-describedby="button-addon1"
          onChange={props.changeQuery}
        />
        <button class="btn btn-primary" type="button" id="search-button"  data-mdb-ripple-color="dark"
          onClick={props.searchClick}>
            <SearchIcon />
        </button>
      </div>
  )
}

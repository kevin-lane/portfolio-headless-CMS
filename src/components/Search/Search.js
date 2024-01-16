import React from 'react';
import './Search.css';
import SearchIcon from '../Icons/SearchIcon';

export default function Search(props) {
  return (
    // <div class="d-flex justify-content-center">
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
          <button class="btn btn-primary"   type="button" id="search-button"  data-mdb-ripple-color="dark"
          onClick={props.searchClick}>
              <SearchIcon />
          </button>
      </div>
    /* </div> */
    // <div id='search-container'>
    //   <input
    //     id='searchInput'
    //     class="form-control"
    //     type="text"
    //     placeholder={props.placeholder}
    //     aria-label="default input example"
    //     onChange={props.changeQuery}
    //     >

    //   </input>
    //     <button class="btn btn-outline-secondary" type="button" id="button-addon2"><SearchIcon /></button>
    // </div>
  )
}

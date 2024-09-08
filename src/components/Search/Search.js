import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '../Icons/SearchIcon';

export default function Search(props) {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(true)
  function toggleMenu() {
    setCategoryMenuOpen(!categoryMenuOpen);
    //Set to show menu depending on if menu is open or not
    document.getElementById('dropdownMenu').style.display = categoryMenuOpen ? 'block' : 'none';
  }

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
        <div class="dropdown">
          <button id='dropdownBtn' class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleMenu}>
            Category
          </button>
          <ul id='dropdownMenu' class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#project">Projects</a></li>
            <li><a class="dropdown-item" href="#course">Courses</a></li>
          </ul>
        </div>
        <button class="btn btn-primary" type="button" id="search-button"  data-mdb-ripple-color="dark"
          onClick={props.searchClick}>
            <SearchIcon />
        </button>
      </div>
  )
}

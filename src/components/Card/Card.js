import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div class="card" >
      <img id='image-holder' src={props.image} class="card-img-top" alt={props.altText} />

      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  )
}

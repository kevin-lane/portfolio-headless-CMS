import React from 'react';
import './Card.css';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Card(props) {
  return (
    <div class="card" >
      <GatsbyImage alt={props.alt} image={props.image}/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <p style={{textAlign: 'center'}}>Category: {props.category}</p>
      </div>
    </div>
  )
}

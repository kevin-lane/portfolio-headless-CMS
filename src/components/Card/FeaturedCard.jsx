import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import './FeaturedCard.css';


export const FeaturedCard = (props) => {
  return (
    <div className='featured-card'>
      <GatsbyImage className='featured-image' alt={props.imageAlt} image={props.image} />
      <div id='featured-layer'>
        <h4 id='featured-title'>{props.title}</h4>
      </div>
    </div>
  )
}

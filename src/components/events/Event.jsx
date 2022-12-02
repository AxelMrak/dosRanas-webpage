import React from 'react';
import '../../styles/EventStyles/Event.css';

function Event({ name, text, img }) {
  return (
    <div className='event-unit-card'>
        <h4>{ name }</h4>
        <p>{ text }</p>
        <img className='event-img' src={img}/>
    </div>
  )
}

export default Event
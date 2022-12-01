import React from 'react';
import '../../styles/EventStyles/Event.css';

function Event({ name, text, img }) {
  return (
    <div className='event-unit-card'>
        <h2>{ name }</h2>
        <h4>{ text }</h4>
        <img className='event-img' src={img} width='400' height='400'/>
    </div>
  )
}

export default Event
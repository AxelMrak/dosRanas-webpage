import React from 'react';
import '../../styles/EquipmentStyles/EquipmentStyles.css';

function Equipment({ name, img }) {
  return (
    <div className='equipment-unit-card'>
      <img src={img} width='200' height='200'/>
      <h3>{ name }</h3>
    </div>
  )
}

export default Equipment
import React from 'react';
import '../../styles/StaffUnitStyles/StaffUnitStyles.css';

function StaffUnit({ name, img }) {
  return (
    <div className='staff-unit-card'>
      <img src={img}/>
      <h3>{name}</h3>
    </div>
  )
}

export default StaffUnit
import React from 'react';
import arrow from '../../assets/icons/arrowUp.png';

function ArrowUp() {
  return (
    <div className='arrow-up'>
      <a href='#top' >
        <img src={arrow} width='55'/>
      </a>
    </div>

  )
}

export default ArrowUp
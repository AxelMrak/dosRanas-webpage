import React from 'react';
import logo from '../../assets/Imagenes/WhatsApp.png';

function WhatsAppGlobal() {
  return (
    <div className='whatsapp-global-container'>
    <a href='https://api.whatsapp.com/send?phone=5493874564936&text=Hola%20Alejandro,%20te%20escribo%20desde%20tu%20web'>                
        <img src={logo} width='85' alt='WhatsApp Link'/>
    </a>
    </div>
  )
}

export default WhatsAppGlobal
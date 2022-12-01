// Importaciones por defecto
import React from 'react';
// Importaciones de imagenes
import logo from '../../assets/icons/whatsapp-logo.png';

/**
 * ? Componente simple que renderiza el logo de WhatsApp y lleva al usuario para que pueda contactarse.
 * @returns Devuelve un componente simple que renderiza el icono de WhatsApp y se puede ver en la parte inferior en toda la app
 */
function WhatsAppGlobal() {
  return (
    <div className='whatsapp-global-container'>
      <a href='https://api.whatsapp.com/send?phone=5493874564936&text=Hola%20Alejandro,%20te%20escribo%20desde%20tu%20web'>
        <img src={logo} width='85' alt='WhatsApp Link' />
      </a>
    </div>
  )
};

export default WhatsAppGlobal;
// Importaciones por defecto
import React from 'react';
// Importaciones de imagenes
import logo from '../../assets/Logo provisorio.svg';
import youtube from '../../assets/icons/youtube-logo.png';
import whatsapp from '../../assets/icons/whatsapp-logo.png';
import facebook from '../../assets/icons/facebook-logo.png';
import instagram from '../../assets/icons/instagram-logo.png';
import email from '../../assets/icons/email-logo.png';
// Importaciones de estilos
import '../../styles/FooterStyles/FooterStyles.css';

/**
 * ? Componente Footer
 * @returns Devuelve el footer de la pagina
 */
function Footer() {
  return (
    <footer className='foot'>
      <div className='social-media-container'>
        <h3>Redes sociales</h3>
        <div>
          <a href='https://www.youtube.com/@dosranasproductora4234' target='_blank'>
            <img src={youtube} width='70' alt='youtube-link' />
          </a>
          <a href='https://api.whatsapp.com/send?phone=5493874564936' target='_blank'>
            <img src={whatsapp} width='70' alt='whatsapp-link' />
          </a>
          <a href='https://www.facebook.com/DosRanasProductora' target='_blank'>
            <img src={facebook} width='70' alt='facebook-link' />
          </a>
          <a href='https://www.instagram.com/dosranas/' target='_blank'>
            <img src={instagram} width='70' alt='instagram-link' />
          </a>
          {/* Falta correo de DosRanasProductora */}
          <a href='mailto:elcorreoquequieres@correo.com' target='_blank'>
            <img src={email} width='70' alt='email-link' />
          </a>
        </div>
      </div>
      <div className='logo-name-container'>
        <h3>Dos Ranas Productora</h3>
        <img src={logo} width='100' alt='logo Dos Ranas' />
      </div>
    </footer>
  )
};

export default Footer;
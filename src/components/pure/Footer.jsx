import React from 'react';
import logo from '../../assets/Logo provisorio.svg';
import youtube from '../../assets/youtube-logo.png';
import whatsapp from '../../assets/whatsapp-logo.png';
import facebook from '../../assets/facebook-logo.png';
import instagram from '../../assets/instagram-logo.png';
import email from '../../assets/email-logo.png';
import '../../styles/FooterStyles/FooterStyles.css';

function Footer() {
  return (
    <footer className='foot'>  
      <div className='social-media-container'>
        <h3>Redes sociales</h3>
        <div>
          <a href='https://www.youtube.com/@dosranasproductora4234' target='_blank'><img src={youtube} width='70' /></a>
          <a href='https://api.whatsapp.com/send?phone=5493874564936' target='_blank'><img src={whatsapp} width='70' /></a>
          <a href='https://www.facebook.com/DosRanasProductora' target='_blank'><img src={facebook} width='70' /></a>
          <a href='https://www.instagram.com/dosranas/' target='_blank'><img src={instagram} width='70' /></a>
          {/* Falta correo de DosRanasProductora */}
          <a href='mailto:elcorreoquequieres@correo.com' target='_blank'><img src={email} width='70' /></a>
        </div>   
      </div>
      <div className='logo-name-container'>
        <h3>Dos Ranas Productora</h3>
        <img src={logo} width='100' />
      </div>
      
    </footer>
  )
}

export default Footer;
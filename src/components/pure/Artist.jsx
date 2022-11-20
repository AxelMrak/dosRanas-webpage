// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/ArtistStyles/ArtistUnit.css';
// Se pasan las propiedades del artista: Nombre, imagen, url del video
function Artist({ name, img, video }) {

  // Texto de traducciones
  const { t } = useTranslation("global");

  return (
    <div className='container-artist'>
      <div className='card-artist'>
        <img src={img} width='300' height='250' alt={name}/>
        <h3>{name}</h3>
        <a className="fancy" href={video}>
          <span className="top-key"></span>
          <span className="text">{ t("artists.btn") }</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
    </div>
  );
};

export default Artist;
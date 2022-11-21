// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// Importaciones de componentes
import Artist from '../pure/Artist';
// Importaciones de estilos
import '../../styles/ArtistsStyles/ArtistsContainer.css';

function ArtistsContainer() {

    //* Estado global: Artistas
    const artists = useSelector(state => state.artists.artists);

    // Texto para traduccion
    const { t } = useTranslation("global");


  return (
    <div className='artists-section-container'>
      <h2>{t("artists.title")}</h2>
        <div className='artists-main-container'>
          {/* { Recorremos el estado global artista y renderizamos un componente artista por cada uno  */}
          {
            artists.map((artist, index) => 
                <Artist index={index} key={artist.name} name={artist.name} img={artist.image} video={artist.url}/>
            )
          }
        </div>
        
    </div>
  );
};

export default ArtistsContainer;
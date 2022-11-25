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

    //* Estados globales: Artistas y artistas filtrados
    const artists = useSelector(state => state.artists.artists);
    const artistsFiltered = useSelector(state => state.artists.artistsFiltered);
    // Texto para traduccion
    const { t } = useTranslation("global");


  return (
    <div className='artists-section-container'>
      <h2>{t("artists.title")}</h2>
        <div className='artists-main-container'>
          {/*  Si el estado de artistas filtrados es mayor a un array vacio se rendereizan los artistas filtrados. Y sino, osea no se ha realizado una busqueda, se muestran todos los artistas  */}
          {
            artistsFiltered > [] ? artistsFiltered.map((artist, index) => 
              <Artist index = { index } key = { artist.name } name = { artist.name } img = { artist.image } video = { artist.url } />
            )
            :
            artists.map((artist, index) => 
                <Artist id={index} key={artist.name} name={artist.name} img={artist.image} video={artist.url}/>
            )
          }
        </div>
    </div>
  );
};

export default ArtistsContainer;
// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// Importaciones de componentes
import Artist from './Artist';
// Importaciones de estilos
import '../../styles/ArtistsStyles/ArtistsContainer.css';

/**
 * ? Componente contenedor de Artistas
 * @returns Componente contenedor de artistas. Va en la pagina artistas (NO CONFUNDIR CON LA GALERIA DE ARTISTAS)
 */
function ArtistsContainer() {

  // Texto para traduccion
  const { t, i18n } = useTranslation("global");


  //* Estados globales: Artistas y artistas filtrados y filtrados por idioma en estado global
  const globalEs = useSelector(state => state.globalSpanish.objectsSpanish);
  const globalEn = useSelector(state => state.globalEnglish.objectsEnglish);
  const artistsFiltered = useSelector(state => state.artists.artistsFiltered);

  return (
    <div className='artists-section-container'>
      <h2>{t("artists.title")}</h2>
      <p>{t("artists.p")}</p>
      <div className='artists-main-container'>
        {/* Dos if */}
        {/*  Si el estado de artistas filtrados es mayor a un array vacio se rendereizan los artistas filtrados. Y sino, osea no se ha realizado una busqueda, se muestran todos los artistas  */}
        {/* Luego, si el lenguaje es spagnol se renderiza el estado global en ese idioma, y sino en ingles */}
        {/* Dentro de la iteracion de cada uno encontramos otra condicion que renderiza solo los artistas del estado global */}
        {
          artistsFiltered > [] ?
            artistsFiltered.map((artist, index) =>
              <Artist index={index} key={artist.name} name={artist.name} img={artist.image} video={artist.url} />
            )
            :
            i18n.language === 'es' ?
              globalEs.map((item, index) =>
                item.type === 'artist' ? <Artist id={index} key={item.name} name={item.name} img={item.image} video={item.url} /> : null
              )
              :
              globalEn.map((item, index) =>
                item.type === 'artist' ? <Artist id={index} key={item.name} name={item.name} img={item.image} video={item.url} /> : null
              )
        }
      </div>
    </div>
  )
};

export default ArtistsContainer;
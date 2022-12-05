// Importaciones por defecto
import React from 'react';
// Importacion de componentes
import Slider from '../carousel/Slider';
import GalleryArtists from '../../components/artists/GalleryArtists';
// Importacion de estilos
import '../../styles/MainStyles/MainStyles.css';

/**
 * ? Seccion principal en HomePage
 * @returns Devuelve la seccion principal que estará en la parte superior de la HomePage
 */
function MainSection() {

  return (
    <main>
      <Slider/>
      <GalleryArtists />
    </main>
  )
};

export default MainSection;
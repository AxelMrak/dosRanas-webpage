import React from 'react';
import Slider from '../pure/Slider';
import GalleryArtists from '../container/GalleryArtists';
import '../../styles/MainStyles/MainStyles.css';


function MainSection() {
  return (
    <main>
      <Slider/>
      <GalleryArtists/>
    </main>
  )
}

export default MainSection
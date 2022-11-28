// Importaciones por defecto
import React, { useEffect } from 'react';
// Importaciones de estilos
import '../../styles/HomePageStyles/HomePageStyles.css';
// Importaciones de componentes
import About from '../../components/container/About';
import OurJobs from '../../components/container/OurJobs';
import Instagram from '../../components/container/Instagram';
import ArtistsContainer from '../../components/container/ArtistsContainer';
import { useDispatch } from 'react-redux';
import { resetArtists } from '../../redux/slices/sliceArtists';
import OurTeam from '../../components/container/OurTeam';
import GalleryArtists from '../../components/container/GalleryArtists';
import MainSection from '../../components/sections/MainSection';
import AboutSection from '../../components/sections/AboutSection';

function HomePage() {

  // Dispatcher de redux toolkit
  const dispatch = useDispatch();

  // Cada vez que se recarga la pagina se resetean los artistas filtrados
  useEffect(() => {
    dispatch(resetArtists())
  }, [])
  

  return (
    <div className='home-main-container'>
        <MainSection/>
        <AboutSection/>
        <Instagram/>
        {/* <About/>
        <OurJobs/>
        <Instagram/>
        <OurTeam/>
        <ArtistsContainer/> */}
    </div>
  )
}

export default HomePage
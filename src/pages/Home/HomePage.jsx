// Importaciones por defecto
import React, { useEffect } from 'react';
// Importaciones de estilos
import '../../styles/HomePageStyles/HomePageStyles.css';
// Importaciones de componentes
import About from '../../components/container/About';
import Main from '../../components/container/Main';
import OurJobs from '../../components/container/OurJobs';
import Instagram from '../../components/container/Instagram';
import ArtistsContainer from '../../components/container/ArtistsContainer';
import { useDispatch } from 'react-redux';
import { resetArtists } from '../../redux/slices/sliceArtists';

function HomePage() {

  // Dispatcher de redux toolkit
  const dispatch = useDispatch();

  // Cada vez que se recarga la pagina se resetean los artistas filtrados
  useEffect(() => {
    dispatch(resetArtists())
  }, [])
  

  return (
    <div className='home-main-container'>
        <Main/>
        <About/>
        <OurJobs/>
        <Instagram/>
        <ArtistsContainer/>
    </div>
  )
}

export default HomePage
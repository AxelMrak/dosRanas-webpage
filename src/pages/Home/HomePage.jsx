// Importaciones por defecto
import React, { useEffect } from "react";
// Importaciones de estilos
import '../../styles/HomePageStyles/HomePageStyles.css';
// Importaciones de dependencias
import { useDispatch } from 'react-redux';
import { resetArtists } from '../../redux/slices/sliceArtists';
// Importaciones de componentes
import Instagram from '../../components/instagram/Instagram';
import MainSection from '../../components/sections/MainSection';
import AboutSection from '../../components/sections/AboutSection';
import EventsSection from "../../components/sections/EventsSection";

function HomePage() {
  // Dispatcher de redux toolkit
  const dispatch = useDispatch();

  // Cada vez que se recarga la pagina se resetean los artistas filtrados
  useEffect(() => {
    dispatch(resetArtists());
  }, []);

  return (
    <div className="home-main-container">
      <MainSection />
      <AboutSection />
      <Instagram />
      <EventsSection />
      {/* <About/>
        <OurJobs/>
        <Instagram/>
        <OurTeam/>
        <ArtistsContainer/> */}
    </div>
  );
}

export default HomePage;

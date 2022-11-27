// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { ImageGrid } from 'react-fb-image-video-grid';
// Importaciones de estilos
import '../../styles/JobsStyles/OurJobsStyles.css';
// Importaciones de imagenes
import video1 from '../../assets/videos/Video demo 1.mp4';
import video2 from '../../assets/videos/Video demo 2.mp4';
import video3 from '../../assets/videos/Video demo 3.mp4';


function OurJobs() {
    // Texto de traducciones
    const { t } = useTranslation("global");

  return (
    <section className='jobs-main-container'>
        <h2>{t("ourJobs.title")}</h2>
          <ImageGrid className= "ImageGrid">
            <video src={video2} controls/>
            <video src={video1} controls/>
            <video src={video3} controls/>
          </ImageGrid>
    </section>
  );
};

export default OurJobs;
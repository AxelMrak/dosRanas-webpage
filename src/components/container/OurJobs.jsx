// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { ImageGrid } from 'react-fb-image-video-grid';
// Importaciones de estilos
import '../../styles/JobsStyles/OurJobsStyles.css';
// Importaciones de imagenes
import Img3 from '../../assets/Imagenes/AboutUs.jpg';
import Img2 from '../../assets/Imagenes/AboutUs2.jpg';
import Img1 from '../../assets/Imagenes/AboutUs3.jpg';


function OurJobs() {
    // Texto de traducciones
    const { t } = useTranslation("global");

  return (
    <section className='jobs-main-container'>
        <h2>{t("ourJobs.title")}</h2>
          <ImageGrid className= "ImageGrid">
            <img className='imagenes-clientes' src={Img1} />
            <img className='imagenes-clientes' src={Img2} />
            <img className='imagenes-clientes' src={Img3} />
          </ImageGrid>
    </section>
  );
};

export default OurJobs;
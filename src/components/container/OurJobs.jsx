import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageGrid } from 'react-fb-image-video-grid';
import '../../styles/JobsStyles/OurJobsStyles.css';
import Img3 from '../../assets/Imagenes/aboutUs.jpg';
import Img2 from '../../assets/Imagenes/aboutUs2.jpg';
import Img1 from '../../assets/Imagenes/aboutUs3.jpg';


function OurJobs() {

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
  )
}

export default OurJobs;
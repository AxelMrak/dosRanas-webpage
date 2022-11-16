import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/JobsStyles/OurJobsStyles.css';
import vid1 from '../../assets/gifs/aboutUs-1.gif';
import vid2 from '../../assets/gifs/aboutUs-2.gif';
import vid3 from '../../assets/gifs/aboutUs-3.gif';
import vid4 from '../../assets/gifs/aboutUs-4.gif';
import vid5 from '../../assets/gifs/aboutUs-5.gif';
import vid6 from '../../assets/gifs/aboutUs-6.gif';
import { ImageGrid } from 'react-fb-image-video-grid';

function OurJobs() {

    const { t } = useTranslation("global");

  return (
    <section className='jobs-main-container'>
        <h2>{t("ourJobs.title")}</h2>
          <ImageGrid className= "ImageGrid">
            <img className='video' src={vid1}  />
            <img className='video' src={vid5}  />
            <img className='video' src={vid2}  />
            <img className='video' src={vid4}  />
            <img className='video' src={vid3}  />
            {/*<img className='video' src={vid6}  />*/}
          </ImageGrid>
    </section>
  )
}

export default OurJobs;
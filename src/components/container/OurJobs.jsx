import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/JobsStyles/OurJobsStyles.css';
import vid1 from '../../assets/videos/videoAbout1.mp4';

function OurJobs() {

    const { t } = useTranslation("global");

  return (
    <section className='jobs-main-container'>
        <h2>{t("ourJobs.title")}</h2>
        <div className='jobs-videos-container'>
            <video className='video' src={vid1} width='400' height='400' autoPlay />
              <video className='video' src={vid1} width='400' height='400' autoPlay />
              <video className='video' src={vid1} width='400' height='400' autoPlay />
              <video className='video' src={vid1} width='400' height='400' autoPlay />
              <video className='video' src={vid1} width='400' height='400' autoPlay />
              <video className='video' src={vid1} width='400' height='400' autoPlay />
        </div>
    </section>
  )
}

export default OurJobs;
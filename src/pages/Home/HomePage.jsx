import React from 'react';
import '../../styles/HomePageStyles/HomePageStyles.css';
import About from '../../components/container/About';
import Main from '../../components/container/Main';
import OurJobs from '../../components/container/OurJobs';
import Instagram from '../../components/container/Instagram';
import ArtistsContainer from '../../components/container/ArtistsContainer';

function HomePage() {

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
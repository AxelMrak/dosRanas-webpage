import React from 'react';
import '../../styles/HomePageStyles/HomePageStyles.css';
import About from '../../components/container/About';
import Main from '../../components/container/Main';
import OurJobs from '../../components/container/OurJobs';
import InstagramWidget from '../../components/pure/InstagramWidget';

function HomePage() {
  return (
    <div className='home-main-container'>
        <Main/>
        <About/>
        <OurJobs/>
        <InstagramWidget/>
    </div>
  )
}

export default HomePage
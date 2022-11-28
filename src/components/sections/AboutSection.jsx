import React from 'react';
import About from '../container/About';
import Equipments from '../container/Equipments';
import OurTeam from '../container/OurTeam';
import '../../styles/AboutSectionStyles/AboutSectionStyles.css';

function AboutSection() {
  return (
    <section className='about-section-container'>
      <About/>
      <OurTeam/>
      <Equipments/>
    </section>
  )
}

export default AboutSection
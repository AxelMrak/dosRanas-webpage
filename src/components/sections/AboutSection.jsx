// Importaciones por defecto
import React from 'react';
// Importaciones de componentes que van en la seccion
import About from '../container/About';
import Equipments from '../container/Equipments';
import OurTeam from '../container/OurTeam';
// Importacion de estilos
import '../../styles/AboutSectionStyles/AboutSectionStyles.css';

/**
 * ? Seccion de Quienes Somos
 * @returns Devuelve la seccion de sobre nosotros o About
 */
function AboutSection() {
  return (
    <section className='about-section-container'>
      <About/>
      <OurTeam/>
      <Equipments/>
    </section>
  )
};

export default AboutSection;
// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/AboutStyles/AboutStyles.css';

function About() {
  
    // Texto para traduccion
    const { t } = useTranslation("global");

  return (
    <section className='about-section-container'>
        <h2>{t("about.title")}</h2>
        <p>{t("about.text")}</p>
    </section>
  );
};

export default About;
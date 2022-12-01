// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/AboutStyles/AboutStyles.css';
// Importaciones de imagenes
import logo from '../../assets/Logo provisorio.svg'

/**
 * ? Componente About 
 * @returns Devuelve subseccion About. Presenta a la empresa.
 */
function About() {
  
    // Texto para traduccion
    const { t } = useTranslation("global");

  return (
    <div className='about-section-container'>
        <img src={logo} width='200' alt='Logo Dos Ranas'/>
        <h2>{t("about.title")}</h2>
        <p>{t("about.text")}</p>
    </div>
  )
};

export default About;
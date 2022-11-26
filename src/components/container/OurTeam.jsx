// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/OurTeamStyles/OurTeamStyles.css';

function OurTeam() {
  
    // Texto para traduccion
    const { t } = useTranslation("global");

  return (
    <section className='about-section-container'>
        <h2>{t("ourTeam.title")}</h2>
        <p>{t("ourTeam.text")}</p>
    </section>
  );
};

export default OurTeam;
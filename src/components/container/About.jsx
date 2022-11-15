import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/AboutStyles/AboutStyles.css';

function About() {

    const { t } = useTranslation("global");

  return (
    <section className='about-section-container'>
        <h2>{t("about.title")}</h2>
        <p>{t("about.text")}</p>
    </section>
  );
};

export default About;
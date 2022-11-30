// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/OurTeamStyles/OurTeamStyles.css';
// Importaciones de componentes
import StaffUnit from '../pure/StaffUnit';

// Array de objetos que representan a los miembros del Staff
const team = [
  {
    name: 'Alejandro Martinez',
    img: 'https://randomuser.me/api/portraits/men/86.jpg'
  },
  {
    name: 'Rodolfo Suarez',
    img: 'https://randomuser.me/api/portraits/men/56.jpg'
  },
  {
    name: 'Enzo Fernandez',
    img: 'https://randomuser.me/api/portraits/men/36.jpg'
  }
];

/**
 * ? Componente contenedor de los miembros del Staff
 * @returns Devuelve componente contenedor de los miembros del Staff
 */
function OurTeam() {
  
    // Texto para traduccion
    const { t } = useTranslation("global");

  return (
    <section className='team-section-container'>
        <h2>{t("ourTeam.title")}</h2>
        <p>{t("ourTeam.text")}</p>
        <div className='staff-container'>
          {
            team.map(item => 
              <StaffUnit key={item.name} name={item.name} img={item.img}/>
            )
          }
        </div>
    </section>
  )
};

export default OurTeam;
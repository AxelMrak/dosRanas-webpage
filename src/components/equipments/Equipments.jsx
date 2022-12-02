// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de componentes
import Equipment from './Equipment';
// Importaciones de estilos
import '../../styles/EquipmentsStyles/EquipmentsStyles.css';
import { useSelector } from 'react-redux';

// Equipamientos (Array de objetos)

/*
 ? Componente contenedor Equipments
 * @returns Devuelve un componente Equipments contenedor de las unidades Equipment
 */
function Equipments() {
  //Texto de traduccion
  const { t, i18n } = useTranslation("global");

  // Estados globales
  const globalEs = useSelector(state => state.globalSpanish.objectsSpanish);
  const globalEn = useSelector(state => state.globalEnglish.objectsEnglish);

  return (
    <div className='equipments-container'>
      <h2>{t("equipment.title")}</h2>
      <p>{t("equipment.text")}</p>
      <div className='equipments-container-2'>
        {
          i18n.language === 'es' ?
            globalEs.map(item => item.type === 'equipment' ?
              <Equipment name={item.name} img={item.img} description={item.description} />
              :
              null
            )
            :
            globalEn.map(item => item.type === 'equipment' ?
              <Equipment name={item.name} img={item.img} description={item.description} />
              :
              null)
        }
      </div>
    </div>
  )
};

export default Equipments;
// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de componentes
import Equipment from '../pure/Equipment';
// Importaciones de estilos
import '../../styles/EquipmentsStyles/EquipmentsStyles.css';

// Equipamientos (Array de objetos)
const items = [
  {
    name: 'Sony X300R',
    img: 'https://sp.sony-europe.com/da/1030/305928.jpeg'
  },
  {
    name: 'Sony HDC-1500R',
    img: 'https://pro.sony/s3/2022/03/04132113/e3f5c819-3492-4238-a339-c3d2d3fd3a2a-removebg.png'
  },
];

/*
 ? Componente contenedor Equipments
 * @returns Devuelve un componente Equipments contenedor de las unidades Equipment
 */
function Equipments() {
  //Texto de traduccion
  const { t } = useTranslation("global");

  return (
    <div className='equipments-container'>
      <h2>{ t("equipment.title") }</h2>
      <p>{ t("equipment.text") }</p>
      <div className='equipments-container-2'>
        {
          items.map(item => 
            <Equipment key={item.name} name={item.name} img={item.img}/>
          )
        }
      </div>
    </div>
  )
};

export default Equipments;
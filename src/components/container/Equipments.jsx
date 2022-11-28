import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/EquipmentsStyles/EquipmentsStyles.css';
import Equipment from '../pure/Equipment';

const items = [
  {
    name: 'Sony HDC-1500R',
    img: 'https://sp.sony-europe.com/da/1030/305928.jpeg'
  },
  {
    name: 'Sony HDC-1500R',
    img: 'https://pro.sony/s3/2022/03/04132113/e3f5c819-3492-4238-a339-c3d2d3fd3a2a-removebg.png'
  },
]

function Equipments() {

  const { t } = useTranslation("global");

  return (
    <div className='equipments-container'>
      <h2>{ t("equipment.title") }</h2>
      <p>{ t("equipment.text") }</p>
      <div className='equipments-container-2'>
        {
          items.map(item => 
            <Equipment name={item.name} img={item.img}/>
          )
        }
      </div>
    </div>
  )
}

export default Equipments
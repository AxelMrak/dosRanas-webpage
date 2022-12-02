// Importaciones por defecto
import React from 'react';
// Importacion de estilos
import '../../styles/EquipmentStyles/EquipmentStyles.css';

/**
 * ? Componente unidad de Equipamiento
 * @param { Se le pasa el nombre y una imagen ilustrativa del equipamiento } param0 
 * @returns Devuelve un componente Equipamiento
 */
function Equipment({ name, img, description }) {
  return (
    <div className='equipment-unit-card'>
      <img src={img} width='200' height='200' />
      <h3>{name}</h3>
      <p>{ description }</p>
    </div>
  )
};

export default Equipment;
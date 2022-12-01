// Importaciones por defecto
import React from 'react';
// Importaciones de estilos
import '../../styles/StaffUnitStyles/StaffUnitStyles.css';

/**
 * ? Componente unidad Staff
 * @param { Recibe nombre e imagen de la unidad Staff } param0 
 * @returns Devuelve componente unidad del Staff
 */
function StaffUnit({ name, img }) {
  return (
    <div className='staff-unit-card'>
      <img src={img}/>
      <h3>{name}</h3>
    </div>
  )
};

export default StaffUnit;
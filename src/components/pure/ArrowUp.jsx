// Importaciones por defecto
import React from 'react';
// Importaciones de imagenes
import arrow from '../../assets/icons/arrowUp.png';

/**
 * ? Componente que nos lleva al top de la pagina en celulares
 * @returns Devuelve un icono que representa un acceso directo a la parte superior de la pagina (Solo en MOBILE)
 */
function ArrowUp() {
  return (
    <div className='arrow-up'>
      <a href='#top' >
        <img src={arrow} width='55' alt='Flecha hacia arriba. Ir al top de la pagina'/>
      </a>
    </div>
  )
};

export default ArrowUp;
// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { buyArtist } from '../../redux/slices/sliceCart';
// Importaciones de estilos
import '../../styles/ArtistStyles/ArtistUnit.css';
// Se pasan las propiedades del artista: Nombre, imagen, url del video
function Artist({ id, name, img, video }) {

  // Texto de traducciones
  const { t } = useTranslation("global");

  // Dispatcher de acciones Redux
  const dispatch = useDispatch();

  return (
    <div className='container-artist'>
      <div className='card-artist'>
        <img src={img} width='300' height='250' alt={name} />
        <h3>{name}</h3>
        <a className="fancy" href={video}>
          <span className="top-key"></span>
          <span className="text">{t("artists.btn")}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
        {/* Con este boton mandamos al artista al carrito pasando su id, su nombre, y su imagen */}
        <a className="fancy" 
          onClick={() =>
             dispatch(buyArtist({ name: name, img: img, id: id }))
            }>
          <span className="top-key"></span>
          <span className="text">{t("artists.btn2")}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
    </div>
  );
};

export default Artist;
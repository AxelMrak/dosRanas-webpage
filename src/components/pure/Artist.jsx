// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { buyArtist } from '../../redux/slices/sliceCart';
// Importaciones de estilos
import '../../styles/ArtistStyles/ArtistUnit.css';
import 'react-toastify/dist/ReactToastify.css';

/**
 * ? Componente de la unidad Artista
 * @param { Recibe id, nombre, imagen, y una url de un video de YouTube. Todo lo anterior del artista } param0 
 * @returns Devuelve el artista en una tarjeta estilizada
 */
function Artist({ id, name, img, video }) {

  // Texto de traducciones
  const { t } = useTranslation("global");

  // Dispatcher de acciones Redux
  const dispatch = useDispatch();

  // Traemos estado global que indica si el artista existe en el carrito.
  const cartGlobal = useSelector(state => state.cart.cart);

  /*
   ? Funcion que se encarga de pasar el artista para que sea añadido al carrito. Si el elemento existe en el carrito, entonces enviará un alerta que advertirá de esto, y sino se agregara el artista y mostrará una alerta.
   * @param { Recibe el id del artista para verificar si existe el artista en el carrito  } id 
   */

  const buyArtistFunc = (id) => {
    if (cartGlobal.some(elem => elem.id === id) === true) {
      toast.warn(t("artists.alertIncludes"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else {
      dispatch(buyArtist({ name: name, img: img, id: id }))
      toast.success(t("artists.alertBuy"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  };

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
          onClick={() => buyArtistFunc(id)}>
          <span className="top-key"></span>
          <span className="text">{t("artists.btn2")}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
    </div>
  )
};

export default Artist;
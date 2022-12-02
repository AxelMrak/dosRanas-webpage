import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { deleteArtist } from '../../redux/slices/sliceCart';

function ItemCart({ id, name, img }) {

  const { t } = useTranslation("global");

  // Dispatcher de acciones de Redux ToolKit
  const dispatch = useDispatch();

  /**
 * ? Funcion que elimina un artista en particular del carrito
 * Tambien muestra un alerta
 * @param { Recibe el id del artista para identificar cual eliminar } id 
 */
  const deleteArtistsFunc = (id) => {
    dispatch(deleteArtist(id))
    toast.info(t("artists.deleteInCartAlert"), {
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


  return (
    <li key={name} className='item-unit-list'>
      <img src={img} width='80px' height='80px' />
      <p>{name}</p>
      <span onClick={() => deleteArtistsFunc(id)}>❌</span>
    </li>
  )
}

export default ItemCart
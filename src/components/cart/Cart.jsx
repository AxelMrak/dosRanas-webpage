// Importaciones por defecto
import React, { useState } from 'react';
import Badge from 'rsuite/Badge';
// Importaciones de dependencias
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// Importaciones de acciones de Redux/Toolkit
import { deleteArtist, resetCart } from '../../redux/slices/sliceCart';
// Importaciones de imagenes
import cartIco from '../../assets/icons/cart-ico.png';
// Importaciones de estilos
import '../../styles/CartCanvaStyles/CartCanvaStyle.css';
import ItemCart from './ItemCart';


/*
? Componente carrito que se muestra en el header
 * @returns Un icono que representa el carrito y que lo muestra u oculta. Y el offcanvas de Bootstrap que permite ver el contenido del carrito.
 */
function Cart() {

  // Texto de traduccion
  const { t } = useTranslation("global");

  // Estado global del carrito
  const artistsCart = useSelector(state => state.cart.cart)

  // Estado local y funcion manejadora que muestran u ocultan el offcanvas
  const [show, setShow] = useState(false);

  // Despachador de acciones Redux
  const dispatch = useDispatch();

  // Muestra u oculta el offcanvas de bootstrap
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * ? Funcion que resetea el carrito de compras
   * Tambien muestra un alerta
   */
  const resetCartFunc = () => {
    dispatch(resetCart())
    toast.info(t("header.cartResetAlert"), {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };

  return (
    <>
      <Badge className='badge-count' content={artistsCart.length}>
        <img className='cart-ico' width='40px' src={cartIco} onClick={handleShow}></img>
      </Badge>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("header.cartTitle")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Renderizamos los artistas que pasamos al carrito */}
          <ul className='items-list'>
            {
              artistsCart.map(artist =>
                <ItemCart key={artist.id} id={artist.id} name={artist.name} img={artist.img}/>
              )
            }
          </ul>
          {/* TODO: These styles should be in styles apart */}
          <div className='buttons-body-offcanvas'>
            {
              artistsCart.length > 1 ?
                <button className='btn btn-danger' onClick={resetCartFunc}>{t("header.cartReset")}</button>
                :
                null
            }
            {
              artistsCart.length >= 1 ?
                <button className='btn btn-primary'>{t("header.cartSubmit")}</button>
                :
                null
            }
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
};

export default Cart;
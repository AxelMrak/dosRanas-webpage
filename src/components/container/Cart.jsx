// Importaciones por defecto
import React, { useState } from 'react';
import Badge  from 'rsuite/Badge';
// Importaciones de dependencias
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// Importaciones de imagenes
import cartIco from '../../assets/icons/cart-ico.png';
// Importaciones de estilos
import '../../styles/CartCanvaStyles/CartCanvaStyle.css';
import { deleteArtist, resetCart } from '../../redux/slices/sliceCart';

function Cart() {

  // Texto de traduccion
  const { t } = useTranslation("global");
  // Estado global del carrito
  const artistsCart = useSelector(state => state.cart.cart)
  // Estado local y funciones modificadores que muestran el offcanva
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          {/* Mostramos los artistas que pasamos al carrito */}
          <ul className='items-list'>
            {
              artistsCart.map(artist =>
                <li key={artist.name} className='item-unit-list'>
                  <img src={artist.img} width='80px' />
                  <p>{artist.name}</p>
                  <span onClick={() => dispatch(deleteArtist(artist.id))}>❌</span>
                </li>
              )
            }
          </ul>
          {
            artistsCart.length > 1 ? <p className='reset-button' onClick={() => dispatch(resetCart())}>{ t("header.cartReset") }</p> : null
          }
          {
            artistsCart.length >= 1 ? <button className='btn btn-primary'>{ t("header.cartSubmit") }</button> : null
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart
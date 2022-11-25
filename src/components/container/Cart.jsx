// Importaciones por defecto
import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
// Importaciones de dependencias
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// Importaciones de imagenes
import cartIco from '../../assets/cart-ico.png';
// Importaciones de estilos
import '../../styles/CartCanvaStyles/CartCanvaStyle.css';

function Cart() {

  // Texto de traduccion
  const { t } = useTranslation("global");
  // Estado global del carrito
  const artistsCart = useSelector(state => state.cart.cart)
  // Estado local y funciones modificadores que muestran el offcanva
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img className='cart-ico' src={cartIco} onClick={handleShow} width='50'/>
        <Badge className='badge'>{artistsCart.length}</Badge>
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
                  <img src={artist.img} width='70px' />
                  <p>{artist.name}</p>
                </li>
              )
            }
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart
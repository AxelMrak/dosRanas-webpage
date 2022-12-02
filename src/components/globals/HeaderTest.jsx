import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// Importaciones de dependencias
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { resetArtists } from '../../redux/slices/sliceArtists';
// Importaciones de imagenes
import logo from '../../assets/Logo provisorio.svg';
import spanish from '../../assets/icons/spanish.png';
import english from '../../assets/icons/english.png';
//Importaciones de componentes
import Search from '../search/Search';
import Cart from '../cart/Cart';

function HeaderTest() {

  // Texto de traduccion y funcion para modificar idioma
  const { t, i18n } = useTranslation("global");
  // Dispatcher de redux toolkit
  const dispatch = useDispatch()
  // Estado que muestra o no el menu desplegable. Por defecto, esta escondido.
  const [showMenu, setShowMenu] = useState(false);

  /**
   * ? Funcion manejadora del estado del menu desplegable
   */
  const openMenu = () => {
    setShowMenu(!showMenu)
  };

  /**
   * ? Funcion que devuelve el estado de artista a su estado original cuando volvemos a al inicio. Esto es debido a la funcion de busqueda ya que este muta el estado original de artistas.
   */
  const resetArtistsFunc = () => {
    dispatch(resetArtists())
  };

  /**
   * ? Funcion que cambia el lenguaje de la pagina 
   */
  const changeLanguageFunc = () => {
    i18n.language === 'es' ?
      i18n.changeLanguage("en")
      :
      i18n.changeLanguage("es")
  };


  return (
    <Navbar className='navbar' id='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <div className='brand'>
          <Link to='/'>
            <img src={logo} width='100' alt='Logo Dos Ranas' />
          </Link>
          <div className="container">
            <div className="glitch" data-text="Dos Ranas">Dos Ranas {t("header.title")}</div>
            <div className="glow">Dos Ranas {t("header.title")}</div>
          </div>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <p>{ t("header.menu") }</p>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              { t("header.offcanva.title") } 
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-item">
                {/* Cuando se hace click en el link tambien se resetean los artistas filtrados */}
                <Link className='unit-list' to="/artistas"
                  onClick={resetArtistsFunc}
                >{t("header.artists")}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link className='unit-list' to="/servicios">{t("header.services")}</Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link className='unit-list' to="/staff">{t("header.staff")}</Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link className='unit-list' to="/contacto">{t("header.contact")}</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Search/>
            </Form>
            <img
              src={i18n.language === 'es' ? spanish : english}
              onClick={changeLanguageFunc}
            />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Cart/>
      </Container>
    </Navbar>
  )
}

export default HeaderTest
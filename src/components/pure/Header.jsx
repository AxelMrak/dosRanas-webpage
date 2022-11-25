// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { resetArtists } from '../../redux/slices/sliceArtists';
// Importaciones de imagenes
import logo from '../../assets/Logo provisorio.svg';
import spanish from '../../assets/spanish.png';
import english from '../../assets/english.png';
//Importaciones de componentes
import Search from '../container/Search';
import Cart from '../container/Cart';


// Header por bootstrap
function Header() {

    // Texto de traduccion y funcion para modificar idioma
    const { t, i18n } = useTranslation("global");
    // Dispatcher de redux toolkit
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-black gx-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} width='100' />
                    Dos Ranas Productora
                </Link>
                <button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <span>{t("header.menu")}</span>
                </button>
                <div className="collapse" id="collapseExample">
                    <div className='navbar-collapse-body'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Cuando se hace click en el link tambien se resetean los artistas filtrados */}
                                <Link className='unit-list' to="/artistas"
                                    onClick={
                                        () => dispatch(resetArtists())}
                                >{t("header.artists")}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='unit-list' to="/servicios">{t("header.services")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='unit-list' to="/staff">{t("header.staff")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='unit-list' to="/contacto">{t("header.contact")}</Link>
                            </li>
                        </ul>
                        <Search />
                        {/* Al hacer click se cambia el idioma con el .changeLanguage, y, a su vez, la bandera tambien cambia dependiendo del idioma actual que es detectado por el metodo .language que es pasado a un operador ternario */}
                        <img
                            src={
                                i18n.language === 'es' ? spanish : english
                            }
                            onClick={
                                i18n.language === 'es' ? () => i18n.changeLanguage("en") : () => i18n.changeLanguage("es")
                            }
                        />
                        <Cart />

                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;
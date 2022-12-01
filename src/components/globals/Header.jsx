// Importaciones por defecto
import React, { useState } from 'react';
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

/**
 * ? Componente Header
 * @returns Devuelve componente Header
 */
function Header() {

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
        <nav className='navbar' id='top'>
            <div className='brand'>
                <Link to='/'>
                    <img src={logo} width='100' alt='Logo Dos Ranas' />
                </Link>
                <div className="container">
                    <div className="glitch" data-text="Dos Ranas">Dos Ranas {t("header.title")}</div>
                    <div className="glow">Dos Ranas {t("header.title")}</div>
                </div>
            </div>
            <div className='menu-search'>
                <Search />
                <button onClick={openMenu} className='btn-menu'>
                    {t("header.menu")}
                </button>
            </div>
            {showMenu === true ?
                <div className='collapsible'>
                    <div className='nav'>
                        <ul className='list'>
                            <li className="nav-item">
                                {/* Cuando se hace click en el link tambien se resetean los artistas filtrados */}
                                <Link className='unit-list' to="/artistas"
                                    onClick={resetArtistsFunc}
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
                    </div>
                    <div className='others-nav'>
                        <img
                            src={i18n.language === 'es' ? spanish : english}
                            onClick={changeLanguageFunc}
                        />
                        <Cart />
                    </div>
                </div>
                : null
            }
        </nav>
    )
};

export default Header;
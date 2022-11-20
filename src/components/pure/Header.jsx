// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Importaciones de imagenes
import logo from '../../assets/Logo provisorio.svg';
import spanish from '../../assets/spanish.png';
import english from '../../assets/english.png';

function Header() {
    // Texto de traduccion y funcion para modificar idioma
    const { t, i18n } = useTranslation("global");

    return (
        <header className="Head">
            <img src={logo} width='150' alt="Logo de la productora" />
            <nav className='list'>
                {/*TODO: <Link to="/">Inicio</Link> */}
                <Link className='unit-list' to="/servicios">{t("header.services")}</Link>
                <Link className='unit-list' to="/staff">{t("header.staff")}</Link>
                <Link className='unit-list' to="/contacto">{t("header.contact")}</Link>
                {/* Cambia en funcion del idioma actual que es recibido mediante la funcion i18n.language */}
                {/* Cambia el lenguaje de la pagina mediante la funcion i18n.changeLanguage */}
                <img src={i18n.language === 'es' ? spanish : english} onClick={i18n.language === 'es' ? () => i18n.changeLanguage("en") : () => i18n.changeLanguage("es")} />
            </nav>
        </header>
    );
};

export default Header;
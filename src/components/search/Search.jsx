// Importaciones por defecto
import React, { useState } from 'react';
// Importaciones de librerias
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// Importaciones de acciones de Redux
import { filterArtists } from '../../redux/slices/sliceArtists';
import { filterEnglish } from '../../redux/slices/sliceGlobalEnglish';
import { filterSpanish } from '../../redux/slices/sliceGlobalSpanish';

/**
 * ? Componente Search que se encarga de la busqueda de objetos globales
 * @returns Componente buscador que se encarga de buscar en la pagina
 */
function Search() {

  // Texto de traduccion
  const { t, i18n } = useTranslation("global");
  // Estado que contiene lo escrito en el input de la barra de busqueda
  const [text, setText] = useState();
  // Dispatcher redux toolkit
  const dispatch = useDispatch();


  const submit = (e) => {
    e.preventDefault()
    dispatch(filterArtists(text))
  };


  const takeText = (e) => setText(e.target.value.toString().toLowerCase())

  return (
    <form
      className="d-flex"
      role="search"
      /**
     * ? Se encarga de evitar el comportamiento por default del formulario y despecha la accion para filtrar los objetos para la busqueda.
     * @param { Recibe el evento SUBMIT } e 
     */
      onSubmit={ i18n.language === 'es' ? (e) => { 
        e.preventDefault()
        dispatch(filterSpanish(text))
       } : 
       (e) => {
        e.preventDefault()
        dispatch(filterEnglish(text))
       } }>
      {/* Toma el texto que va cambiando desde el input y lo pasa al estado
      @param {Recibe el evento ONCHANGE } e
      @returns Devuelve el estado mutado a traves de su manejador */}
      <input className="form-control me-2" type="search" placeholder={t("header.search")} aria-label="Search" onChange={
        (e) => setText(e.target.value.toString().toLowerCase())
      } />
      <button className="btn btn-outline-success" type="submit">{t("header.searchBtn")}</button>
    </form>
  );
};

export default Search;
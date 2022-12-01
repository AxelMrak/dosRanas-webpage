// Importaciones por defecto
import React, { useState } from 'react';
// Importaciones de librerias
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// Importaciones de acciones de Redux
import { filterArtists } from '../../redux/slices/sliceArtists';

/**
 * ? Componente Search que se encarga de la busqueda de objetos globales
 * @returns Componente buscador que se encarga de buscar en la pagina
 */
function Search() {

  // Texto de traduccion
  const { t } = useTranslation("global");
  // Estado que contiene lo escrito en el input de la barra de busqueda
  const [text, setText] = useState();
  // Dispatcher redux toolkit
  const dispatch = useDispatch();

  /**
   * ? Se encarga de evitar el comportamiento por default del formulario y despecha la accion para filtrar los objetos para la busqueda.
   * @param { Recibe el evento SUBMIT } e 
   */
  const submit = (e) => {
    e.preventDefault()
    dispatch(filterArtists(text))
  };

  /**
   * ? Toma el texto que va cambiando desde el input y lo pasa al estado
   * @param { Recibe el evento ONCHANGE } e 
   * @returns Devuelve el estado mutado a traves de su manejador
   */
  const takeText = (e) => setText(e.target.value.toString().toLowerCase())

  return (
    <form
      className="d-flex"
      role="search"
      onSubmit={() => submit(e)}>
      <input className="form-control me-2" type="search" placeholder={t("header.search")} aria-label="Search" onChange={
        () => takeText(e)
      } />
      <button className="btn btn-outline-success" type="submit">{t("header.searchBtn")}</button>
    </form>
  );
};

export default Search;
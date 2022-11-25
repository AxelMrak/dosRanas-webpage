// Importaciones por defecto
import React, {  useState } from 'react';
// Importaciones de librerias
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { filterArtists } from '../../redux/slices/sliceArtists';

function Search() {

    // Texto de traduccion
    const { t } = useTranslation("global");
    // Estado que contiene lo escrito en el input de la barra de busqueda
    const [text, setText] = useState();
    // Dispatcher redux toolkit
    const dispatch = useDispatch();

    

  return (
      <form 
        className="d-flex" 
        role="search" 
        onSubmit={(e) => {
                e.preventDefault()
                dispatch(filterArtists(text));
            }}>
          <input className="form-control me-2" type="search" placeholder={t("header.search")} aria-label="Search" onChange={
            (e) => setText(e.target.value.toString().toLowerCase())
          }/>
          <button className="btn btn-outline-success" type="submit">{t("header.searchBtn")}</button>
      </form>
    );
};

export default Search;
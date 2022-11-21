import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { filterArtists } from '../../redux/slice';

function Search() {

    const { t } = useTranslation("global");
    const [text, setText] = useState();
    const dispatch = useDispatch();

  return (
      <form 
        className="d-flex" 
        role="search" 
        onSubmit={(e) => {
                e.preventDefault()
                dispatch(filterArtists({ payload: text
                }));
            }}>
          <input className="form-control me-2" type="search" placeholder={t("header.search")} aria-label="Search" onChange={
            (e) => setText(e.target.value.toLowerCase())
          }/>
          <button className="btn btn-outline-success" type="submit">{t("header.search")}</button>
      </form>
    );
};

export default Search;
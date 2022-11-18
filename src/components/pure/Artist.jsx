import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/ArtistStyles/ArtistUnit.css';

function Artist({ name, img, video }) {

  const { t } = useTranslation("global");

  return (
    <div className='container-artist'>
      <div className='card-artist'>
        <img src={img} width='300' height='250'/>
        <h3>{name}</h3>
        <a className="fancy" href={video}>
          <span className="top-key"></span>
          <span className="text">{ t("artists.btn") }</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
    </div>
  );
};

export default Artist;
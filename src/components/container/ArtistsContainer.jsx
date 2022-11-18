import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Artist from '../pure/Artist';
import '../../styles/ArtistsStyles/ArtistsContainer.css';

function ArtistsContainer() {

    const artists = useSelector(state => state.artists);
    console.table(artists)

    const { t } = useTranslation("global");

  return (
    <div className='artists-section-container'>
      <h2>{t("artists.title")}</h2>
        <div className='artists-main-container'>
          {
            artists.map(artist => 
                <Artist key={artist.name} name={artist.name} img={artist.image} video={artist.url}/>
            )
          }
        </div>
        
    </div>
  )
}

export default ArtistsContainer
import React from 'react'
import { useTranslation } from 'react-i18next'
import ArtistsContainer from '../../components/container/ArtistsContainer';

function ArtistsPage() {

    const { t } = useTranslation("global");

  return (
    <div className='artists-page-main'>
        <ArtistsContainer/>
    </div>
  )
}

export default ArtistsPage
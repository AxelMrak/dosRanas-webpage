import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Importacion estilos propios
import '../../styles/GalleryArtistsStyles/GalleryArtistsStyles.css';


// import required modules
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Artist from "../pure/Artist";

function GalleryArtists() {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth);
  })
  

  const { t } = useTranslation("global"); 

  const artists = useSelector(state => state.artists.artists)

  // TODO: Este componente debe ser puro, por tanto deberia estandarizarlo para luego reutilizarlo en la seccion staff o en las marcas que trabajaron con la empresa.

  return (
    <div className="gallery-artists-main">
      <h2>{ t("artists.title") }</h2>
      <Swiper
        slidesPerView={ width < 800 ? 1 : 3 }
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: '100%' }}
      >
      {
        artists.map((artist, index) => 
        <SwiperSlide key={index}>
          <Artist name={artist.name} video={artist.url} img={artist.image}/>
        </SwiperSlide>
        )
      }
      </Swiper>
    </div>
  )
}

export default GalleryArtists
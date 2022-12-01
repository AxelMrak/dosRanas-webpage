//Importaciones por defecto
import React, { useEffect, useState } from "react";

//Importacion estilos 
import '../../styles/GalleryArtistsStyles/GalleryArtistsStyles.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importacion de dependencias
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Importaciones de componentes
import Artist from "../artists/Artist";

/**
 * ? Componente contenedor de artistas con galeria
 * @returns Devuelve una galeria con artistas
 */
function GalleryArtists() {

  // Estado y su funcion manejadora
  const [width, setWidth] = useState()

  // UseEffect que cuando se renderiza el componente actualiza el estado pasandole el ancho de la ventana actual
  useEffect(() => {
    setWidth(window.innerWidth);
  })
  
  // Texto de traduccion
  const { t } = useTranslation("global"); 
  // Estado global de artistas
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
          <Artist id={index} name={artist.name} video={artist.url} img={artist.image}/>
        </SwiperSlide>
        )
      }
      </Swiper>
    </div>
  )
}

export default GalleryArtists;
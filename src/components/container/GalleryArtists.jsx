import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

function GalleryArtists() {

  const artists = useSelector(state => state.artists.artists)

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center' }}
      >
      {
        artists.map((artist, index) => 
        <SwiperSlide key={index}>
          <a href="/artistas" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={artist.image} width='200' height='200' style={{ borderRadius: '25px', margin: '1rem' }}/>
            <h2>{artist.name}</h2>
          </a>
        </SwiperSlide>
        )
      }
      </Swiper>
    </div>
  )
}

export default GalleryArtists
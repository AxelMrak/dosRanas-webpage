// Importaciones por defecto
import React from 'react';
// Importaciones de dependencias
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import '../../styles/CarouselStyles/GalleryStyles.css';
// Importaciones de gifs
import vid1 from '../../assets/gifs/mainVideo-hd.gif';
import vid2 from '../../assets/gifs/mainVideo2-hd.gif';
import vid3 from '../../assets/gifs/mainVideo3-hd.gif';

/**
 * TODO: Buscar videos de iguales medidas o tamaños para evitar redimension de carousel.
 */

/**
 * ? Componente Slider o Carousel de Bootstrap
 * @returns Slider de Bootstrap con imagenes o videos varios
 */
function Slider() {

    // Texto de traduccion
    const { t, i18n } = useTranslation("global");

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={vid1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                        <p>{t("slider.title1")}</p>
                        <p>{t("slider.text1")}</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={vid2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                        <div className='Carrousell-subItems'>
                            <p>{t("slider.title2")}</p>
                            <p className='P-carousell'>{t("slider.text2")}</p>
                        </div>

                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={vid3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                        <div className='Carrousell-subItems'>
                            <p>{t("slider.title3")}</p>
                            <p className='P-carousell'>{t("slider.text3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default Slider;
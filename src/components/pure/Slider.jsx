import React from 'react';
import '../../styles/GalleryStyles/GalleryStyles.css';
import vid1 from '../../assets/videos/mainVideo-hd.gif'
import vid2 from '../../assets/videos/mainVideo2-hd.gif'
import vid3 from '../../assets/videos/mainVideo3-hd.gif'
import i18next from 'i18next';


function Slider() {
    
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={vid1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <p>Dos Ranas</p>
                        <p>productora</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={vid2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">

                        <div className='Carrousell-subItems'>
                            <p>{i18next.t('servicios')}</p>
                            <p className='P-carousell'>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={vid3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <div className='Carrousell-subItems'>
                            <p>{i18next.t('staff')}</p>
                            <p className='P-carousell'>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
}

export default Slider
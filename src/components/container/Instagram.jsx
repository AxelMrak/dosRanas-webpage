// Importaciones por defecto
import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/instagram-word-logo.png';
import '../../styles/InstagramStyles/InstagramStyles.css';

function Instagram() {

    const { t } = useTranslation("global");

    return (
        <div className='instagram-container'>
            <div className='instagram-text-container'>
                <img src={logo} width='350'/>
            <p>{ t("instagram.text") }</p>
            </div>
            
            <div className="embedsocial-hashtag" data-ref="e500e8a2c556976dd14a3f93b4eadde0fd72bbfe"> <a className="feed-powered-by-es feed-powered-by-es-feed-new" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Widget by EmbedSocial"> Widget by EmbedSocial<span>→</span> </a> </div>
            <script>
                {/* Insertamos script de EmbedSocial para obtener el widget de Instagram */}
                {
                    (function (d, s, id) { var js; if (d.getElementById(id)) { return; } js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript"))
                } 
            </script>
        </div>
    )
};

export default Instagram;
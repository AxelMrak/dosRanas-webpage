import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "../../styles/EventsStyles/Events.css";
import Event from "../events/Event";
import Quote from "../events/Quote";

function EventsSection() {

  const { t, i18n } = useTranslation("global");

  // Estados globales
  const globalEs = useSelector(state => state.globalSpanish.objectsSpanish);
  const globalEn = useSelector(state => state.globalEnglish.objectsEnglish);


  return (
    <div className="events-container">
      <h2>{t("event.title")}</h2>
      <p>{t("event.text1")}</p>
      <h2>{t("event.title2")}</h2>
      <p>{t("event.text2")}</p>
      <div className="events-container-2">
        {
          i18n.language === 'es' ? 
            globalEs.map(item => item.type === 'service' ? <Event name={item.name} img={item.img} text={item.description}/> : null)
            :
            globalEn.map(item => item.type === 'service' ? <Event name={item.name} img={item.img} text={item.description} /> : null)
        }
      </div>
      <Quote/>
    </div>
  );
}

export default EventsSection;

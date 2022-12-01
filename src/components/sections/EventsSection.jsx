import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/EventsStyles/Events.css";
import ButtonQuote from "../pure/ButtonQuote";
import Event from "../pure/Event";
import Quote from "../pure/Quote";

const items = [
  {
    name: "Staff",
    text: "Tenemos el mejor staff para los diferentes servicios que desees para tu evento con calidad profesional.",
    img: "https://images.unsplash.com/photo-1641122669951-3e2aff778d3b?ixlib=rb-4.0.3&dl=joao-viegas-IYLL5obdJhY-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Detalles",
    text: "Tenemos el mejor staff para los diferentes servicios que desees para tu evento con calidad profesional.",
    img: "https://images.unsplash.com/photo-1440595228939-3673bdb622b4?ixlib=rb-4.0.3&dl=diz-play-PIrOQrqewLE-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Buffet",
    text: "Tenemos el mejor staff para los diferentes servicios que desees para tu evento con calidad profesional.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&dl=chuttersnap-aEnH4hJ_Mrs-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Fecha",
    text: "Tenemos el mejor staff para los diferentes servicios que desees para tu evento con calidad profesional.",
    img: "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-4.0.3&dl=towfiqu-barbhuiya-jOeh3Lv88xA-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
];

function Events() {
  const { t } = useTranslation("global");

  return (
    <div className="events-container">
      <h2>{t("event.title")}</h2>
      <p>{t("event.text1")}</p>
      <h2>{t("event.title2")}</h2>
      <p>{t("event.text2")}</p>
      <div className="events-container-2">
        {items.map((item) => (
          <Event name={item.name} text={item.text} img={item.img} />
        ))}
      </div>
      <Quote/>
    </div>
  );
}

export default Events;

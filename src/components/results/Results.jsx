// Importaciones por defecto
import React from 'react'
// Importaciones de dependencias
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
// Importaciones de componentes
import Artist from '../artists/Artist';
import Equipment from '../equipments/Equipment';
import Event from '../events/Event';
// Importaciones de estilos
import '../../styles/ResultsStyles/ResultsStyles.css';

/**
 * ? Componente contenedor de los resultados de la busqueda general
 * s Renderiza los resultados de la busqueda tomando como referencia el estado global Filtered.
 */
function Results() {

  // Texto de traduccion
  const { t, i18n } = useTranslation("global");
  // Estados globales separados por idioma
  const filteredEs = useSelector(state => state.globalSpanish.filtered);
  const filteredEn = useSelector(state => state.globalEnglish.filtered);

  
 return(
    <section className='results-section'>
      <h2>{ t("results.title") }</h2>
      <p>{ filteredEs > [] || filteredEn > [] ? t("results.text") : t("results.notFound") }</p>
      <div className='results-container'>
        {
          i18n.language === 'es' ?
            filteredEs > [] ?
              filteredEs.map((item, index) => {
                switch (item.type) {
                  case 'artist':
                  return <Artist id={index} key={item.name} name={item.name} img={item.image} video={item.url} />
                    break;
                  case 'equipment':
                    return <Equipment key={item.name} name={item.name} img={item.img} description={item.description} />
                    break;
                  case 'service':
                    return <Event key={item.name} name={item.name} img={item.img} text={item.description} />
                    break;
                }
              })
              :
              null
            :
            filteredEn.map((item, index) => {
              switch (item.type) {
                case 'artist':
                  return <Artist id={index} key={item.name} name={item.name} img={item.image} video={item.url} />
                  break;
                case 'equipment':
                  return <Equipment key={item.name} name={item.name} img={item.img} description={item.description} />
                  break;
                case 'service':
                  return <Event key={item.name} name={item.name} img={item.img} text={item.description} />
                  break;
              }
            })
        }
      </div>
    </section>
  )
}

export default Results;
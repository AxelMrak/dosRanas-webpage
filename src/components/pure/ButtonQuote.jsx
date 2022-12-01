import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import "../../styles/ButtonQuoteStyles/ButtonQuote.css"


function ButtonQuote() {
  const { t } = useTranslation('global')
    return (

    /* Hay que cambiar la ruta de servicios */

    <div className="wrap">
      <Link className="button" to='/servicios'>{t("event.buttonQuote")}</Link>
    </div>

     
    )
}

export default ButtonQuote
import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/QuoteStyles/Quote.css';
import ButtonQuote from './ButtonQuote';

function Quote() {
const {t} = useTranslation("global")
  return (
    <div className="quote-unit-card">
      <div className='text-quote'>
        <h4> {t("event.quote")} </h4>
      </div>
        <ButtonQuote/>
    </div>
  )
}
export default Quote
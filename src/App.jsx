import './styles/AppStyles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import logo from './assets/Logo provisorio.svg';
import { useTranslation } from 'react-i18next';
import spanish from './assets/spanish.png';
import english from './assets/english.png';

function App() {

  const { t, i18n } = useTranslation("global");

  return (
    <div className="App">
      <Router>
        <header className="Head">
          <img src={logo} width='150' alt="Logo de la productora" />
          <nav className='list'>
            {/*TODO: <Link to="/">Inicio</Link> */}
            <Link className='unit-list' to="/servicios">{t("header.services")}</Link>
            <Link className='unit-list' to="/staff">{t("header.staff")}</Link>
            <Link className='unit-list' to="/contacto">{t("header.contact")}</Link>
            <img src={i18n.language === 'es' ? spanish : english} onClick={i18n.language === 'es' ? () => i18n.changeLanguage("en") : () => i18n.changeLanguage("es")} />
          </nav>
          
        </header>
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Servicios */}
          <Route path="/servicios" element={<h2>Pendiente</h2>} />
          {/* Staff */}
          <Route path="/staff" element={<h2>Pendiente</h2>} />
          {/* Contacto */}
          <Route path='/contacto' element={<h2>Pendiente</h2>} />
          {/* 404 */}
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

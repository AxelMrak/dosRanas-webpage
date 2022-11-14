import './styles/AppStyles/App.css';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import logo from './assets/Logo provisorio.svg';
import i18next from 'i18next';

function App() {



  return (
    <div className="App">
      <Router>
        <header className="Head">
          <img src={logo} width='150' alt="Logo de la productora" />
          <nav className='list'>
              {/*TODO: <Link to="/">Inicio</Link> */}
              <Link className='unit-list' to="/servicios">{i18next.t('servicios')}</Link>
              <Link className='unit-list' to="/staff">{i18next.t('staff')}</Link>
              <Link className='unit-list' to="/contacto">{i18next.t('contacto')}</Link>
          </nav>
        </header>
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Servicios */}
          <Route path="/servicios" element={<h2>Pendiente</h2>} />
          {/* Staff */}
          <Route path="/staff" element={<h2>Pendiente</h2>}/>
          {/* Contacto */}
          <Route path='/contacto' element={<h2>Pendiente</h2>}  />
          {/* 404 */}
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

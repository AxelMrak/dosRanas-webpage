// Importaciones por defecto
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones de paginas y componentes
import HomePage from './pages/Home/HomePage';
import Header from './components/pure/Header';
import ArtistsPage from './pages/Artistas/ArtistsPage';
import Footer from './components/pure/Footer';
// Importaciones de dependencias
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import './styles/AppStyles/App.css';


function App() {

  // Texto de traduccion
  const { t } = useTranslation("global") 
  // Estado global que indica la existencia de un elemento en el carrito
  const includes = useSelector(state => state.cart.includes);

  return (
    <Router>
      <div className="App">
        
        <Header />

        {   
          includes === true ? <Alert variant='primary'>{ t("alert.cartAlert") }</Alert> : null
        }
        {/* Se muestra una alerta dependiendo si includes es true, esto significa si queremos sumar al carrito un elemento ya existente */}
        
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Artistas Page */}
          <Route path='/artistas' element={<ArtistsPage />} />
          {/* Servicios */}
          <Route path="/servicios" element={<h2>Pendiente</h2>} />
          {/* Staff */}
          <Route path="/staff" element={<h2>Pendiente</h2>} />
          {/* Contacto */}
          <Route path='/contacto' element={<h2>Pendiente</h2>} />
          {/* 404 */}
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

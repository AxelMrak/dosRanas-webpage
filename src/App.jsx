// Importaciones por defecto
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones de paginas y componentes
import HomePage from './pages/Home/HomePage';
import Header from './components/globals/Header';
import ArtistsPage from './pages/Artistas/ArtistsPage';
import Footer from './components/globals/Footer';
import WhatsAppGlobal from './components/globals/WhatsAppIcon';
import ArrowUp from './components/globals/ArrowUp';
// Importaciones de dependencias
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
// Importaciones de estilos
import './styles/AppStyles/App.css';

/*
 ? Componente principal de la aplicacion
 */
function App() {

  // Texto de traduccion
  const { t } = useTranslation("global")

  // Estado local y su manejador
  const [width, setWidth] = useState();

  // Comprueba el ancho de la ventana cuando se renderiza el componente
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Se muestra una alerta dependiendo si includes es true, esto significa si queremos sumar al carrito un elemento ya existente */}
        <ToastContainer />
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
      {/* Se muestra la flecha que lleva al top de la pagina cuando estamos en MOBILE */}
      {
        width < 800 ? <ArrowUp /> : null
      }
      <WhatsAppGlobal />
      <Footer />
    </Router>
  )
};

export default App;

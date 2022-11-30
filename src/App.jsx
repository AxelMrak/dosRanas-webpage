// Importaciones por defecto
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones de paginas y componentes
import HomePage from './pages/Home/HomePage';
import Header from './components/pure/Header';
import ArtistsPage from './pages/Artistas/ArtistsPage';
import Footer from './components/pure/Footer';
// Importaciones de dependencias
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// Importaciones de estilos
import './styles/AppStyles/App.css';
import WhatsAppGlobal from './components/container/WhatsAppIcon';
import ArrowUp from './components/pure/ArrowUp';
import { ToastContainer } from 'react-toastify';



function App() {

  // Texto de traduccion
  const { t } = useTranslation("global")

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <Router>
      <div className="App">

        <Header />

       <ToastContainer/>
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
      {
        width < 800 ? <ArrowUp /> : null
      }
      <WhatsAppGlobal />
      <Footer />
    </Router>
  );
};

export default App;

// Importaciones por defecto
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones de paginas
import HomePage from './pages/Home/HomePage';
import Header from './components/pure/Header';
// Importaciones de estilos
import './styles/AppStyles/App.css';
import ArtistsPage from './pages/Artistas/ArtistsPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Artistas Page */}
          <Route path='/artistas' element={<ArtistsPage/>}/>
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
    </Router>
  );
};

export default App;

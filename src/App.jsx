import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resultados from './pages/Resultados';
import QuienSoy from './pages/QuienSoy';
import Experiencia from './pages/Experiencia';
import Estudios from './pages/Estudios';
import Conocimientos from './pages/Conocimientos';
import Certificaciones from './pages/Certificaciones'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/conocimientos" element={<Conocimientos />} />
        <Route path="/certificaciones" element={<Certificaciones />} /> 
      </Routes>
    </Router>
  );
}

export default App;

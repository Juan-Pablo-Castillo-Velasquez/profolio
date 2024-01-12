// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Headers from './Components/header'; "./Components/header"
import Home from "./Components/home"
import Services from "./Components/Services"
import Experience from "./Components/Experience"
import Card from "./Components/Card"


const App = () => {
  return (
    <Router>
    <div>
      <Headers/>
      <Navbar />

      {/* Usamos <Routes> para envolver nuestras rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/Projectos" element={<Card />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;

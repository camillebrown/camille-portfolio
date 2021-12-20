import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
import { Navbar, Footer } from './components';

function App2() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App2;

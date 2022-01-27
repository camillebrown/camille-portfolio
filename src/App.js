import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
import Work from './pages/work';
import { Navbar, Footer, ProjectDetail } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages';
import Work from './pages/work';
import useScrollToTop from './hooks/useScrollToTop';
import { Navbar, Footer, ScrollUp } from './components';

function App2() {
  const { showButton } = useScrollToTop();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      {showButton && <ScrollUp />}
      <Footer />
    </Router>
  );
}

export default App2;

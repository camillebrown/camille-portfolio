import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/work' component={Work} exact/>
        <Route path='/contact' component={Contact} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

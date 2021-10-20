import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Work2 from './pages/work2';
import Contact from './pages/contact';
import Footer from './components/layout/Footer';



function App2() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/work' component={Work2} exact/>
        <Route path='/contact' component={Contact} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App2;

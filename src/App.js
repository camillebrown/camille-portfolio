import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages';
import Work from './pages';
import Contact from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/work' component={Work} exact />
        <Route path='/contact' component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;

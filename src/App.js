import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Libros from './components/pages/Libros';
import SignUp from './components/pages/SignUp';
import Prestamos from './components/pages/Prestamos';

var sesionVar=localStorage.getItem('sesion');
function App() {
  let sesion;
  if(sesionVar==null){
  sesion=<SignUp/>;
  }else
  sesion=
  <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Libros' component={Libros} />
        <Route path='/sesión' component={SignUp} />
        <Route path='/prestamos' component={Prestamos} />
    </Switch>
  </Router>;
  return (
    <div className="App">
      <header className="App-header">
        {sesion}
      </header>
    </div>
  );
}

export default App;

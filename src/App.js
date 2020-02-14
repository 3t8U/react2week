import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import TrancersAdd from './components/trancersAdd.jsx';
import NavBar from './components/NavBar.jsx'
import { Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import PortalSmashers from './components/PortalSmashers.jsx';






function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TrancersAdd/>
      <NavBar/>
      </header>
      <Switch>
      <Route exact path='/About' component={About} />
      <Route exact path='/PortalSmashers' component={PortalSmashers} />
      </Switch>
    </div>
  );
}

export default App;

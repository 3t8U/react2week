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
import Video from './components/Video.jsx'
import Menu from './components/Menu.jsx'
import logo2 from './components/logo2.png'



function App() {
  const logoStyle ={
  width: '75vh',
  height: '25vh',

  }
  return (
    <div className="App">
      <header className="App-header">
      <TrancersAdd/>
      <NavBar/>
      <div className="logo">
      <img style={logoStyle} src={logo2} alt="banner"></img>
      </div>


      </header>
      <Switch>
      <Route exact path='/About' component={About} />
      <Route path='/PortalSmashers' component={PortalSmashers} />
      <Route path='/video' component={Video} />
      <Route path='/menu' component={Menu} />
      </Switch>
    </div>
  );
}

export default App;

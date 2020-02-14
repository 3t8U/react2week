import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import TrancersAdd from './components/trancersAdd.jsx';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TrancersAdd/>
      </header>
      <NavBar/>
    </div>
  );
}

export default App;

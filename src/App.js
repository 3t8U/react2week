import React from 'react';
import TrancersAdd from './components/trancersAdd.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import NavBar from './components/NavBar.jsx'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TrancersAdd/>
      </header>
    </div>
  );
}

export default App;

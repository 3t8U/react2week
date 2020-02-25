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
import TestimonialList from "./components/TestimonialList";
import NewTestimonialForm from './components/NewTestimonialForm';

const logoStyle ={
  width: '75vh',
  height: '25vh',

}
const kegStyle ={
  width: '25vh',
  height: '25vh',
}

class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    TestimonialList: []
  };
    this.handleAddingNewTestimonialToList = this.handleAddingNewTestimonialToList.bind(this);
}
handleAddingNewTestimonialToList(newTestimonial){
  console.log('newTestimonial: ', newTestimonial);
  const newMasterTestimonialList = this.state.TestimonialList.slice();
  newTestimonial.formattedWaitTime = (newTestimonial.timeOpen).fromNow(true)
  newMasterTestimonialList.push(newTestimonial);
  this.setState({
    TestimonialList: newMasterTestimonialList
  });
}


updateTestimonialElapsedWaitTime() {
   console.log("check");
   let newMasterTestimonialList = this.state.TestimonialList.slice();
   newMasterTestimonialList.forEach((ticket) =>
     ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
   );
   this.setState({TestimonialList: newMasterTestimonialList})
 }

 componentDidMount() {
   this.waitTimeUpdateTimer = setInterval(() =>
     this.updateTestimonialElapsedWaitTime(),
     5000
   );
}
componentWillUnmount(){
clearInterval(this.waitTimeUpdateTimer);
}

render(){

  return (
    <div className="App">
      <header className="App-header">
      <TrancersAdd/>
      <NavBar/>
      <TestimonialList/>
      <div className="logo">
      <img style={logoStyle} src={logo2} alt="banner"></img>
      </div>



      </header>
      <Switch>
      <Route exact path='/About' component={About} />
      <Route path='/PortalSmashers' component={PortalSmashers} />
      <Route path='/video' component={Video} />
      <Route path='/menu' component={Menu} />

      <Route path='/NewTestimonial' render={()=><NewTestimonialForm onNewTestimonialCreation={this.handleAddingNewTestimonialToList} />} />
      </Switch>
    </div>
  );
}
}
export default App;

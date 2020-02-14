import React from 'react';
import smashers from './smashers.jpg'


function PortalSmashers() {
  var smashersAddStyles = {
    // marginBottom: '90%',
    // padding: '.25%',

    margin: '30px',
    border:'15px solid black',
    width: '80%',
    opacity: '.75',
    height: '50vh',
    blurRadius: '10px',
  };
  var linkAddStyles ={
    marginBottom: '25%',
    color:'#FFD300',
    fontSize: '100px',
    fontWeight: 'bolder',
  }

  var miniLinkAddStyles ={
    marginBottom: '25%',
    color:'#FFD300',
    fontSize: '75px',
    fontWeight: 'bolder',
  }

  return (
    <div className="overLord">

    <div className="banner">
    <img style={smashersAddStyles} src={smashers} alt="banner"></img>
    <p><a style={linkAddStyles}href="https://www.facebook.com/events/somewhere-in-the-forest-of-the-cascadia-wilderness/portal-smashers-2020-the-re-smashing/413441849352546/">Portal Smashers II</a></p>
    <p style={miniLinkAddStyles}>"The Re-Smashing" </p>
    </div>

    <div className="link">
   </div>

   </div>
  );
}


























export default PortalSmashers;

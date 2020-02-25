import React from "react";
import Moment from 'moment';
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Testimonial(props){

  let content = {
   textAlign: 'center',
   border: '5px solid #ADD2CC',
   margin: '10px 100px',

  }
  let hrStyle = {
  padding:"10px",
  borderRadius:"5px",


  }
  function displayTimeOpen(timeOpen) {
    console.log(props.timeOpen);
    console.log(timeOpen);
    return timeOpen.from(new Moment(), true);
  }

  return (
    <div>
    <div style={content}>
    {console.log(props)}
    <h2><p><em>{props.testimonial}</em></p></h2>
    <h3>{props.name}</h3>
    <hr style={hrStyle}/>
      <h4>{props.formattedWaitTime}</h4>
    

    </div>
    </div>
  );
}
Testimonial.propTypes = {
  name: PropTypes.string,
  testimonial: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};
export default Testimonial;

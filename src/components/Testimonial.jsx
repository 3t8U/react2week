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
   backgroundColor: 'lightgrey',
   borderRadius: '70px',
   boxShadow:'5px 5px 10px black',
   marginTop: '50px',
   padding:"30px"
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
    <h3>{props.name}</h3>
    <hr style={hrStyle}/>
      <h4>{props.formattedWaitTime}</h4>
    <p><em>{props.testimonial}</em></p>
    <Link to="/EditTestimonial">Update Testimonial</Link>

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

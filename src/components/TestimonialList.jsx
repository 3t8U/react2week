import React from "react";
import Testimonial from "./Testimonial";
import PropTypes from 'prop-types';


function TestimonialList(props){
  let bg={
    backgroundColor: '#269382',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
    minHeight:"1100px",
    minWid:"1100px",
    borderTop: "10px outset"

  }
  console.log(props.ticketList);
  return (
    <div style={bg}>
    <hr/>
    {props.ticketList.map((ticket) =>
      <Testimonial name={ticket.name}
        testimonial={ticket.testimonial}
        formattedWaitTime={ticket.formattedWaitTime}
        key={ticket.id}/>
    )}
    </div>
  );
}
TestimonialList.propTypes = {
  ticketList: PropTypes.array
};

export default TestimonialList;

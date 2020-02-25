import React from "react";
import Testimonial from "./Testimonial";
import PropTypes from 'prop-types';


function TestimonialList(props){
  let bg={
    color: 'white',
    border: '5px',
    borderRadius: '50%',
    margin: '100px'

  }
  return (
    <div style={bg}>

    {props.testimonialList.map((testimonial) =>
      <Testimonial name={testimonial.name}
        testimonial={testimonial.testimonial}
        formattedWaitTime={testimonial.formattedWaitTime}
        key={testimonial.id}/>
    )}
    </div>
  );
}
TestimonialList.propTypes = {
  testimonialList: PropTypes.array
};

export default TestimonialList;

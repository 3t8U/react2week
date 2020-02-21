import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTestimonialForm(props){
  let _name = null;
  let _testimonial = null;


  function handleNewTestimonialFormSubmission(event) {
    event.preventDefault();
  props.onNewTestimonialCreation({name: _name.value, testimonial: _testimonial.value, id: v4, timeOpen: new Moment()});
    _name.value = '';
    _testimonial.value = '';
  }

  return (
    <div>
      <form style={{margin: "10px", position: "relative", zIndex: "550"}}onSubmit={handleNewTestimonialFormSubmission}>
        <input
        type='text'
        id='name'
        placeholder='Name'
        ref={(input) => {_name = input;}}/>
        <textarea
        id='testimonial'
        placeholder='Share your experience'
        ref={(textarea) => {_testimonial = input;}}/>
        <textarea
      <button type='submit'>Submit my Testimonial!</button>

      </form>
    </div>

  );
}
NewTestimonialForm.propTypes = {
  onNewTestimonialCreation: PropTypes.func
};
export default NewTestimonialForm;

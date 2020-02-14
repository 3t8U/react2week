import React from "react";
import PropTypes from "prop-types";

function Flavor(props){
  return (
    <div>
    <p><h2><em>{props.name}</em></h2></p>
    <h3>{props.flavor} - {props.price}</h3>
    <h3> Best paired with "{props.pairing}"</h3>
    <hr/>
    </div>
  );
}

Flavor.propTypes = {
  name: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  price: PropTypes.string.isRequired,
  pairing: PropTypes.string.isRequired,
};

export default Flavor;

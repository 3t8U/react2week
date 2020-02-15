import React from "react";
import Flavor from "./Flavor";


const menuList = [

  {
    name: "Green",
    flavor: "Toxic Toad Sweat",
    price: "€6.66",
    pairing: "HiTech or uplifting PsyCore"

  },

  {
    name: "Pink",
    flavor: "Grapefruit X Bubblegum",
    price: "€7.77",
    pairing: "Soumosaundi"

  },

  {
    name: "Red",
    flavor: "Crimson Psynnamon",
    price: "€6.66",
    pairing: "Full-On"

  },

  {
    name: "Yellow",
    flavor: "Lemon Yellow Sunshine",
    price: "€3.33",
    pairing: "Goa"

  },

  {
    name: "Blue",
    flavor: "Byron Bay Berry",
    price: "€6.66",
    pairing: "Darkpsy"

  },

  {
    name: "Purple",
    flavor: "Codeine Psyzzurp",
    price: "€5.55",
    pairing: "Scando-Clown Freak Beat or OG Forest"

  }

]

function Menu(){
  const menuStyles = {
    fontFamily: 'Ultra',
    fontSize: "20px",
    padding: "10%",
    color: "#663300",
    fontWeight: "boldest",
    zIndex: "+1",
    color: 'White',
    textShadow: "2px 2px 5px brown"

  }
  return (
    <div style ={menuStyles}>
    <hr/>
    {menuList.map((flavor,index) =>
      <Flavor
      name={flavor.name}
      flavor={flavor.flavor}
      price={flavor.price}
      pairing={flavor.pairing}
      key={index}/>
    )}
    </div>
  )};

  export default Menu;

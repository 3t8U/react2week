import React from "react";
import Flavor from "./Flavor";


const menuList = [

  {
    name: "Green",
    flavor: "Toxic Toad Sweat",
    price: "€6.66",
    pairing: "HiTech or uplifting PsyCore"

  }

 pink
 red
 yellow
 blue
 purple
















]

function Menu(){
  return (
    <div style={headerStyles}>
    <hr/>
    {menuList.map((flavor,index) =>
      <Market
      name={flavor.name}
      flavor={flavor.flavor}
      price={flavor.price}
      pairing={flavor.pairing}
      key={index}/>
    )}
    </div>
  )};


















  export default Menu;

import React from "react";
import '../styles/formularyworks.css'


const Formularyworks = () => {
  return (
    <form className="formulary__container">
      <input
        className="formulary__input"
        type="text"
        placeholder="write a work"
        name="text"
      />
      <button className="formulary__button">Add work</button>
    </form>
  );
}

export default Formularyworks;
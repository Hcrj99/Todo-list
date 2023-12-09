import React, { useState } from "react";
import '../styles/formularyworks.css'


const Formularyworks = () => {

  const [input, setInput] = useState('');

  const handlerChange = event => {
    setInput(event.target.value);
  }

  const handlerSend = event => {
    const newWork = {
      id: '',
      text: '',
    }
  }

  return (
    <form className="formulary__container">
      <input
        className="formulary__input"
        type="text"
        placeholder="write a work"
        name="text"
        onChange={handlerChange}
      />
      <button className="formulary__button">Add work</button>
    </form>
  );
}

export default Formularyworks;
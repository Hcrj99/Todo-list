import React, { useState } from "react";
import '../styles/formularyworks.css'
import { v4 as uuidv4} from 'uuid'


const Formularyworks = (props) => {

  const [input, setInput] = useState('');

  const handlerChange = event => {
    setInput(event.target.value);
  }

  const handlerSend = event => {
    event.preventDefault();
    
    const newWork = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newWork);
  }

  return (
    <form className="formulary__container"
    onSubmit={handlerSend}>
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
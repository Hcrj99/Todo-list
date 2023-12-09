import React from "react";
import '../styles/work.css'
import { CgCloseR } from 'react-icons/cg';

function Work({ id, text, completed, completedwork, deletework}){
  return (
    <section className={completed ? 'work__container completed': 'work__container'}>
      <div 
      className='work__text'
      onClick={() => completedwork(id)}>
        {text}
      </div>
      <div 
      className='work__container-icons'
      onClick={() => deletework(id)}>
        <CgCloseR className='work__icon'/>
      </div>
    </section>
  );
}

export default Work;
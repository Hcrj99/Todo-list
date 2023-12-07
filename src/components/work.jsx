import React from "react";
import '../styles/work.css'
import { CgCloseR } from 'react-icons/cg';

function Work({ text, completed}){
  return (
    <section className={completed ? 'work__container completed': 'work__container'}>
      <div className='work__text'>
        {text}
      </div>
      <div className='work__container-icons'>
        <CgCloseR className='work__icon'/>
      </div>
    </section>
  );
}

export default Work;
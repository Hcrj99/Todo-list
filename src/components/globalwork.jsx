import React, { useState } from "react";
import Formularyworks from "./formularyworks";
import '../styles/globalwork.css'
import Work from "./work";

function Globalwork(){

  const[works, setWorks] = useState([]);
  
  const addwWork = work => {
    if(work.text.trim()) {
      work.text = work.text.trim();
      const currtentWork = [work, ...works];
      setWorks(currtentWork);
    }
  }

  return (
    <>
      <Formularyworks onSubmit={addwWork}/>
      <section className="works__list-container">
        {
          works.map((work) => 
            <Work 
            text={work.text}
            completed={work.completed}/>
          )
        }
      </section>
    </>
  );
}

export default Globalwork;
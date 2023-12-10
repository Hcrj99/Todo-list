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

  const deleteWork = id => {
    const currentWorks = works.filter(work => work.id !== id);
    setWorks(currentWorks);
  }

  const completedWork = id => {
    const currentWorks = works.map(work => {
      if (work.id === id){
        work.completed = !work.completed;
      }
      return work;
    });
    setWorks(currentWorks);
  }

  return (
    <>
      <Formularyworks onSubmit={addwWork}/>
      <section className="works__list-container">
        {
          works.map((work) => 
            <Work
            key={work.id} 
            id={work.id}
            text={work.text}
            completedwork={completedWork}
            completed={work.completed}
            deletework={deleteWork}/>
          )
        }
      </section>
    </>
  );
}

export default Globalwork;
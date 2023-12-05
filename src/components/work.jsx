import React from "react";


function Work({ text }){
  return (
    <section className="work__container">
      <div className="work__text">
        {text}
      </div>
      <div className="work__icon">
        Eliminar
      </div>
    </section>
  );
}

export default Work;
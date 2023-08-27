import React from "react";
import "../css/card.css"
import Boton from "../componentes/boton"
import 'bootstrap/dist/css/bootstrap.min.css';

function CardYo(){
    return(
     
        <div  class="container">
        
        <div  class="box">
          <span></span>
          <div class="content">
            <h2 className="tC1">Nuevo Reto</h2>
            <p>Conoce con este test las habilidades que tienes en conocimientos de cultura general y descubre mas sobre el mundo que te rodea</p>
           <Boton />
          </div>
        </div>
        
      </div>
        
    )
}

export default CardYo
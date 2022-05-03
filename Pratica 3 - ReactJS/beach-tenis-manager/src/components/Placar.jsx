import React, { Component } from "react";
import Cronometro from "./Cronometro.jsx";
import Dupla from './Dupla.jsx';
import '../css/Placar.css'

class Placar extends Component{
       
    render(){        
        return (
        <>
            <div className="Placar">
                <Cronometro nome={"Open DC de Beach Tenis"} tempo={"00:00:01"} />
                <Dupla dupla={"Fernando Trinta/Linconl Rocha"} sets={0} pontos={1}  />
                <Dupla dupla={"Fernando Trinta/Linconl Rocha"} sets={0} pontos={1}  />  
            </div>
        </>
        )
    }
}

export default Placar;
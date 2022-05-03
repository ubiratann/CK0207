import React, { Component } from "react";
import '../css/Dupla.css'

class Dupla extends Component{
    
    
    render(){        
        return (
        <>
            <div className="flexRow Dupla bold" >
                <div className="nomeDupla ">
                    {this.props.dupla}
                </div>
                <div className="quantidadeSets">
                    {this.props.sets}
                </div>
                <div className="quantidadePontos">
                    {this.props.pontos}
                </div>
            </div>
        </>
        )
    }
}

export default Dupla;
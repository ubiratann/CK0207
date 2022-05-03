import React, { Component } from "react";
import "../css/Cronometro.css"
class Cronometro extends Component{
    render(){
        return(
            <>
                <div className="Cronometro flexRow">
                    <div className="fontSmall">{this.props.nome}</div>
                    <div className="fontSmaller">{this.props.tempo}</div>
                </div>
            </>
        )
    }
}

export default Cronometro;
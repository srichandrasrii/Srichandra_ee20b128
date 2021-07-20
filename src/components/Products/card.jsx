import React from 'react'
import './card.css'


function card(props){
    return(
        <div className="container">
        <div className="card card-costom" >
            <div >
                 <img src={props.src} alt="..."/>
                 <h3 style={{paddingTop:20}}>{props.name}</h3>
            </div>
            <div className="text-area">
                <h5>{props.discription}</h5>
            </div>
            <button style={{marginBottom: 20}} type="button" class="btn btn-md btn-success">Coustomize</button>
        </div>
        </div>
    )
}

export default card;
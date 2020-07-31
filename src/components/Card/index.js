import React from 'react';
const { Link } = require("react-router-dom");

const Card = (props) => {
    return (
        <div className='card'>
             <div className="link-container">
              <Link style={styleP} to={`/character/${props.item.id}`} className="link">{props.item.name}</Link>
            </div>           
            <img src={props.item.image} alt= {props.item.name} width="150" height="150"></img>
        </div>
    )
}

const styleP = {
    fontSize: 20,
    fontWeight: 'bold'
}

export default Card;
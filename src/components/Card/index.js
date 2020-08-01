import React from 'react';
import './Card.css';

const { Link } = require("react-router-dom");

const Card = (props) => {
    return (
        <div className="Card-container">
             <div className="link-container">
              <Link className="Card-link"
              to={{
                  pathname:`/character/${props.item.id}`,
                  item: props.item
                }} 
              >{props.item.name}</Link>
            </div>           
            <img src={props.item.image} alt= {props.item.name} width="200" height="200"></img>
        </div>
    )
}


export default Card;
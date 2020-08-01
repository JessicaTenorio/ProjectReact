import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './CardDetail.css';

class CardDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        if (this.props.location.item === undefined) return <Redirect to={'/'} />
        const { charId } = this.props.match.params;
        const { item } = this.props.location;

        return (
            <div className="CardDetail-div">
                <div><Link to={'/character'}>
                    <button>Go back</button>
                </Link></div>
                <p>Detail {charId}  </p>
                <img src={item.image} alt={item.name} width="60" height="60"></img>
                <p>Name: {item.name}</p>
                <p>Status: {item.status}</p>
                <p>Gender: {item.gender}</p>
                <p>Species: {item.species}</p>
                <p>Location: {item.location.name}</p>
            </div>
        )
    };

}

export default CardDetail;




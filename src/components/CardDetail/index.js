import React from 'react';

class CardDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const { charId } = this.props.match.params;
        const { item } = this.props.location;

        return (
            <div>
                <p>Detail {charId}  </p>
                <img src={item.image} alt={item.name} width="60" height="60"></img>
                <p>Name: {item.name}  </p>
                <p>Status: {item.status}  </p>
                <p>Gender: {item.gender}  </p>
                <p>Species: {item.species}  </p>
                <p>Location: {item.location.name}  </p>
            </div>
        )
    };

}

export default CardDetail;




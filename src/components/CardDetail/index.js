import React from 'react';

class CardDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {charId} = this.props.match.params;
        return (
            <div>
                <h2>Hola {charId} </h2>
            </div>
        )
    };
   
}

export default CardDetail;




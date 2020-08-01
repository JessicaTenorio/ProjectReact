import React from 'react';
import Card from "../Card";
import './CardList.css';
import { getCharacters } from "../../services"
import font1 from '../../resources/font1.jpg'


class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            results: []
        }
    }

    componentDidMount() {
        getCharacters().then(res => {
            this.setState({ loading: false, results: res });
        })
    }

    render() {

        const { loading, results } = this.state;

        if (loading) return <p>Cargando</p>
        return (
            <div>
                <img className="CardList-img" src={font1} alt="font1" ></img>
                <div className="CardList-container">

                    {
                        results.length ? results.map((item, index) => (
                            <Card key={index} item={item} />
                        )) : <p>Error al traer datos!!!!!!!!!!!!!</p>
                    }
                </div>
            </div>
        );
    }

}

export default CardList;
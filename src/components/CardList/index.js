import React from 'react';
import Card from "../Card";
import {getCharacters} from "../../services"


class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            loading : true,
            error : false,
            results: []
        }
    }

    componentDidMount(){
        getCharacters().then(res=>{
            this.setState({loading:false, results:res});          
        })        
    }

    render(){
    
        const {loading, results} = this.state;
 
        if(loading) return <p>Cargando</p>
        return(
            <div>
                {
                results.length ? results.map((item,index)=>(                  
                    <Card key={index} item={item}/>
                )) : <p>Error al traer datos!!!!!!!!!!!!!</p>
                }
            </div>
        );
    }
     
}

export default CardList;
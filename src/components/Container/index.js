import React from 'react';
import Card from "../Card";
import {getCharacters} from "../../services"


class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            loading : true,
            error : false,
            results: []
        }
    }

    /*render(){
        if(this.state.loading) return <p>Cargando</p>
    }*/

    /*componentDidMount(){
        this.setState(state=>({
            loading : !state.loading
        }))
    }*/

    componentDidMount(){
        getCharacters().then(res=>{
            this.setState({loading:false, results:res});          
        })        
    }

    render(){
    
        const {loading, results} = this.state;
 
        if(loading) return <p>Cargando</p>
        return(
            <div className="container">
                {
                results.length ? results.map((item,index)=>(                  
                    <Card key={index} item={item}/>
                )) : <p>Error al traer datos!!!!!!!!!!!!!</p>
                }
            </div>
        );
    }

       /* return <React.Fragment>
            {
                this.state.loading ? <p>Cargando</p> : <p>Ya cargó</p>
            }
        </React.Fragment>*/
}

export default Container;
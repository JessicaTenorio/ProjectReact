import React from 'react';
import logo from '../../resources/home.jpg'
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { }
    }

    
    render(){        
        return(                   
            <div>               
                <img className="Home-img" src={logo} alt="home" ></img>
            </div>
        );
    }
     
}

export default Home;
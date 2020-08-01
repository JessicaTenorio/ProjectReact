import React from 'react';
import logo from '../../resources/home.jpg'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { }
    }

    
    render(){        
        return(                   
            <div>               
                <img src={logo} alt='home'></img>
            </div>
        );
    }
     
}

export default Home;
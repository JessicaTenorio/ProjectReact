import React from 'react';
import CharacterList from '../CardList';
import CardDetail from '../CardDetail';
import Home from '../Home';
import './NavBar.css'
import { Link, Route, Switch } from "react-router-dom";
import notfound from '../../resources/404Notfound.png'

class NavBar extends React.Component {
    render(){
        return (<div className="NavBar-button">

            <header className="NavBar-header">

                    <div className="NavBar-button-li">
                        <Link className="NavBar-button-li-a" to="/">Home</Link>
                    </div>
                    <div className="NavBar-button-li">
                        <Link className="NavBar-button-li-a" to="/character">Character</Link>
                    </div>
                    <div className="NavBar-button-li">
                        <Link className="NavBar-button-li-a" to={{
                            pathname: '/about',
                            name: 'Jessica Tenorio'
                        }}>About</Link>
                    </div>                            

            </header>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact  path="/character" component={CharacterList} />
            <Route path="/character/:charId" component={CardDetail} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={NotFound} />
            </Switch>
        </div>)
    }
}


const About = (props) => {
    const {location} = props;
    return(
    <div>
        <p>{location.name}</p>
        <p>Developer</p>
    </div>
)};


const NotFound = () => (
    <div>
       <img className="NavBar-img" src={notfound} alt="notfound" ></img>
    </div>
);

export default NavBar;
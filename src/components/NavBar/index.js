import React from 'react';
import CharacterList from '../CardList';
import CardDetail from '../CardDetail';
import Home from '../Home';
import './NavBar.css'
import { Link, Route, Switch } from "react-router-dom";

class NavBar extends React.Component {
    render(){
        return (<div className="NavBar-button">

            <header className="NavBar-header">

                    <div className="NavBar-button-li">
                        <Link className="NavBar-button-li-a" to="/">Home</Link>
                    </div>
                    <div className="NavBar-button-li">
                        <Link className="NavBar-button-li-a" to="/character">Charactennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnpm startrs</Link>
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
        <h2>About {location.name}</h2>
    </div>
)};


const NotFound = () => (
    <div>
        <h2>Not found</h2>
    </div>
);

export default NavBar;
import React from 'react';
import Container from '../Container';
import CardDetail from '../CardDetail'
import './Home.css'
import { Link, Route, Switch } from "react-router-dom";

class Home extends React.Component {
    render(){
        return (<div className="Home-button">
            <nav>
                <ul className="Home-button-ul">
                    <li className="Home-button-li">
                        <Link className="Home-button-li-a" to="/">Home</Link>
                    </li>
                    <li className="Home-button-li">
                        <Link className="Home-button-li-a" to="/character">Charactennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnpm startrs</Link>
                    </li>
                    <li className="Home-button-li">
                        <Link className="Home-button-li-a" to={{
                            pathname: '/about',
                            name: 'Jessica Tenorio'
                        }}>About</Link>
                    </li>                            
                </ul>
            </nav>
            <Switch>
            <Route exact path="/" />
            <Route exact  path="/character" component={Container} />
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

export default Home;
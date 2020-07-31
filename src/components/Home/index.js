import React from 'react';
import Container from '../Container';
import CardDetail from '../CardDetail'
const { Link, Route, Switch } = require("react-router-dom");

class Home extends React.Component {
    render(){
        return (<div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/character">Characters</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/about',
                            name: 'Jessica'
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
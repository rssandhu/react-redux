import React , { Component} from 'react';
import {Route , Link} from 'react-router-dom';
import Home from '../Pages/Home';
import Player from '../Pages/Player';
import Counter from '../../containers/Counter/Counter';
import './Routing.css';

class Routing extends Component {
    render(){
        return(
            <div class="Blog">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/player">Player</Link></li>
                </ul>

                <Route path="/" exact component={Home} />
                <Route path="/counter"  component={Counter} />
                <Route path="/player"  component={Player} />
            </div>
        )
    }
}

export default Routing;
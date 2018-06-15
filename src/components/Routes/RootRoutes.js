import React , { Component} from 'react';
import {Route , Link} from 'react-router-dom';
import Home from '../Pages/Home';
import Player from '../Pages/Player';
import Counter from '../../containers/Counter/Counter';
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import News from  '../News/News';
import Auth from '../Auth/Auth';
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
                {/* main nevigation routes starts */}
                <Route path="/" exact component={Home} />
                <Route path="/counter"  component={Counter} />
                <Route path="/player"  component={Player} />
                {/* main navigation routes ende */}
                {/* sidebar routes starts */}
                <Route exact path = '/posts' component = {Posts} />
                <Route path = '/news' component = {News} />
                <Route path = '/getin' component = {Auth} />
                {/* sidebar routes ended */}


                
            </div>
            

        )
    }
}

export default Routing;
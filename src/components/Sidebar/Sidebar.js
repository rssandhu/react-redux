import React , {Component} from 'react';
import './Sidebar.css';
import {Route , Link} from 'react-router-dom';
import Posts from '../Posts/Posts';
import News from '../News/News';
import Auth from '../Auth/Auth';

class Sidebar extends Component {
    render(){
        return(
            <div class="Sidebar">
                 <ul>  
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/getin">Login/Signup</Link></li>
                </ul>

                
            </div> 
        )
    }
}

// const Sidebar = () => (
//     <div class="Sidebar">
//         <h2>Sidebar menus</h2>
//     </div>
// )


export default Sidebar;
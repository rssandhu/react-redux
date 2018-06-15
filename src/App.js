import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Routing from '../src/components/Routes/RootRoutes';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from '../src/components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Routing /> 
            <Sidebar />           
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

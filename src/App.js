import React from 'react';
import './App.css';

import { Switch, Route, } from 'react-router-dom';

import FirstPage from './pages/first-page/first-page.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }

    
  }

  render(){

  
    return (
      <div className='full-site-content'>
        
       
        <Switch>
          <Route exact path='/' component={ FirstPage } />
          <Route exact path='/sign' component={ FirstPage } />
        </Switch>
      </div>
    );
  }
}

export default App;

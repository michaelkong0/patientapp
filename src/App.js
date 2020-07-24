import React from 'react';
import './App.css';

import { Switch, Route, } from 'react-router-dom';

import FirstPage from './pages/first-page/first-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Selection from './pages/selection/selection.component';
import NewCase from './pages/new-case/new-case.component';
import Confirmation from './pages/confirmation/confirmation.component';
import OldCase from './pages/old-case/old-case.component';
import Confirmation1 from './pages/confirmation/confirmation1.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }

    
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }
      this.setState({ currentUser: userAuth });

    });
  }

  render(){

  
    return (
      <div className='full-site-content'>
        
       
        <Switch>
          <Route exact path='/' component={ FirstPage } />
          <Route exact path='/first' component={ FirstPage } />
          <Route exact path='/sign' component={ SignInAndSignUpPage } />
          <Route exact path='/selection' component={ Selection } />
          <Route exact path='/newcase' component={ NewCase } />
          <Route exact path='/oldcase' component={ OldCase } />
          <Route exact path='/confirmation' component={ Confirmation } />
          <Route exact path='/confirmation1' component={ Confirmation1 } />
        </Switch>
      </div>
    );
  }
}

export default App;

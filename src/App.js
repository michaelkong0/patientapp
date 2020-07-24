import React from 'react';
import './App.css';

import { Switch, Route, } from 'react-router-dom';

import FirstPage from './pages/first-page/first-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Camera from "./pages/camera/camera.component"

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
          <Route exact path='/sign' component={ SignInAndSignUpPage } />
          <Route exact path='/camera' component={ Camera } />
        </Switch>
      </div>
    );
  }
}

export default App;

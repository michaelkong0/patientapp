import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.css';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if(password.length <6){
      alert("Password must be at least 6 characters in length!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <h2 className = 'cent'>I do not have a account</h2>
        <br/>
        <span className = 'cent'>Sign up with your email and password</span>
        <br/>
        <br/>
          <label>Display Name</label>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label>Confirm Password</label>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
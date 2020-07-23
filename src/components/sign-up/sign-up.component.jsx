import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.css';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { fName, lName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Your passwords do not match!");
      return;
    }
    if(password.length < 6){
      alert("Your password must be at least 6 characters in length!");
      return;
    }

    try {
      const { doctor } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(doctor, { fName, lName });

      this.setState({
        fName: '',
        lName: '',
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
    const { fName, lName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        
        <form className='sign-up-form' onSubmit={this.handleSubmit} autoComplete='off'>
          <h2 className='title'>I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <hr/>
          <label> First Name </label>
          <FormInput
            type='text'
            name='fName'
            value={fName}
            onChange={this.handleChange}
            required
          />

          <label> Last Name </label>
          <FormInput
            type='text'
            name='lName'
            value={lName}
            onChange={this.handleChange}
            required
          />

          <label> Email </label>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label> Password </label>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            
            required
          />
          <label> Confirm Password </label>
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
import React from 'react';

import SignIn from "../../components/sign-in/sign-in.components"
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <div className = 'vert'></div>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;
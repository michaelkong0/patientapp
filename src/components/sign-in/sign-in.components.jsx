import React from 'react';
import {withRouter,Link} from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import GoogleButton from 'react-google-button';

import './sign-in.styles.css'


class SignIn extends React.Component{
    constructor(props){
        super(props);
        //this.history = useHistory();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const{email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            //this.history.push('/selection');
            
        } catch(error){
            alert('Email/Password combination is incorrect!');
            console.log(error);
        }



        this.setState({email: '', password: ''})
    }

    handleChange = event =>{
        const{ value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                
                <form className = 'signForm' onSubmit={this.handleSubmit}>

                    <br/>
                    <h2 className = 'cen'>Sign in with your email and password</h2>
                    <br/>
                    <label> Email </label>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required />
                    
                        <label> Password </label>
                        <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required />
                    
                    <br/>
                    <Link to ='/selection'><CustomButton type="submit"> Sign In </CustomButton></Link>
                    <br></br>
                    <br></br>
                    <hr/>
                    <br></br>

                    <div className = 'cen'>
                    <Link to='/selection'><GoogleButton 
                    onClick={ signInWithGoogle}
                    /></Link>
                    
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);
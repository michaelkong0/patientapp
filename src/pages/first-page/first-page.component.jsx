import React from 'react';
import { Redirect } from 'react-router-dom';

import './first-page.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';


class FirstPage extends React.Component{
    constructor(){
        super();
        this.state = {
            redirect:false
        }
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/sign' />
        }
      }
    
    render(){
        return(
        <div className ='first'> 
            {this.renderRedirect()}
            <h1>Select Language</h1>
            <CustomButton onClick= {this.setRedirect}> English </CustomButton>
        </div>
        );
    }
    
};

export default FirstPage;





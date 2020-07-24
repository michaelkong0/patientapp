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
            <br></br>
            <CustomButton onClick = {()=>{alert('La traducción se hará pronto (Translation coming soon)')}} >Español</CustomButton>
            <br></br>
            <CustomButton onClick = {()=>{alert('Traduction à venir (Translation coming soon)')}} >Français</CustomButton>
            <br></br>
            <CustomButton onClick = {()=>{alert('中文版节将推出 (Translation coming soon)')}} >中文</CustomButton>
            <br></br>
            <CustomButton onClick = {()=>{alert('अनुवाद जल्द ही आ रहा है (Translation coming soon)')}} >हिन्दी</CustomButton>
            <br></br>
            <h2>Other languages will be added soon</h2>
        </div>
        );
    }
    
};

export default FirstPage;





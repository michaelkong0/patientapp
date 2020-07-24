import React from 'react';
import {withRouter, Link } from 'react-router-dom';
import './selection.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';

class Selection extends React.Component{
    constructor(){
        
        super();
        
        this.state = {
            redirect:false,
            location: null
        }
        
        
    }


   
      


    render(){
        return(
            <div className = 'sel'>
                <h2>Would you like to create a new case or return to an existing one?</h2>
                <br></br>
                <Link to='/newcase'><CustomButton>Create new case</CustomButton> </Link> 
                <br></br>
                <br></br>
                <Link to='oldcase'><CustomButton> Existing case </CustomButton></Link>
            </div>
        );
    }
    


}
export default withRouter(Selection);
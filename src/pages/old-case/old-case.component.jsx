import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './old-case.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';

class OldCase extends React.Component{

    getDoctorName(){
        return 'Yash Kankariya';
    }
    getMessage(){
        return 'You have gotten Tuberculosis. The best treatment is bedrest with rifampin, pyrazinamide and ethambutol. If you cannot get these, please let us know and we will help you aquire some.';
    }
    render(){
        return(
            <div>
                <div className = 'page'>
                { this.getDoctorName() !== null && this.getMessage() !== null ?
                    <div>
                        <h2>From: Doctor {this.getDoctorName()}</h2>
                        <br/>
                        <label>{this.getMessage()}</label>
                        <br/>
                        <br/>
                        <Link to='/confirmation1'><CustomButton>Finish</CustomButton></Link>
                    </div>
                    
                    :
                    <div>
                        <h2>No message received</h2>
                        <br></br>
                        <h2>Check back at a later time</h2>
                        <Link to='confirmation'><CustomButton>Finish</CustomButton></Link>
                    </div>
                    

                    
                }
                  
                </div>
            </div>

        )
    }
}

export default withRouter(OldCase);
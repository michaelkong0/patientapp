import React from 'react';
import './new-case.styles.css';
import {Link, withRouter} from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
//import CustomToggle from '../../components/custom-toggle-button/custom-toggle-button.component';


class NewCase extends React.Component{
    constructor(){
        super();

        this.state ={
            fever: false
        }
    }

    render(){
        return(
            
            <div className = 'addMargin'>
               
               <form className = 'caseForm'>
                    <h2 className = 'title'> Symptoms form</h2>
                    <input type = 'checkbox' id= 'fever' name= 'fever' value = 'true' ></input>
                    <label for='fever'>Do you have a fever above 38 degrees Celcius (100.6 degrees F)?</label>
                    <br/>

                    <input type = 'checkbox' id= 'tired' name= 'tired' value = 'true' ></input>
                    <label for='tired'>Have you felt especially tired recently?</label>
                    
                    
                    <br/>
                    <input type = 'checkbox' id= 'hist' name= 'hist' value = 'true' ></input>
                    <label for='hist'>Has someone you have come in frequent contact with contracted a highly contagious disease?</label>
                    <br/>
                    <input type = 'checkbox' id= 'skin' name= 'skin' value = 'skin' ></input>
                    <label for='skin'>Do you have any abnormal skin marks (like rashes)?</label>
                    <br/>
                    <input type = 'checkbox' id= 'bone' name= 'bone' value = 'bone' ></input>
                    <label for='bone'> Have you dislocated/broken anything?</label>
                    <br/>
                    <label for='pain'> Do you have pain in any of these areas? (Use "Ctrl" or "Cmd" to select multiple)</label>
                    <br/>
                    <select name = 'pain'id = 'pain' multiple>
                        <option value = 'heart'>Heart</option>
                        <option value = 'chest'>Upper chest</option>
                        <option value = 'head'>Headache</option>
                        <option value = 'stomach'>Stomach</option>

                    </select>
                    <br></br>
                    <Link to = '/confirmation'><CustomButton>Submit</CustomButton></Link>
               </form>
               
               
            </div>
        );
    }
}



export default withRouter(NewCase);
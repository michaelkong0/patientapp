import React from 'react';
import './confirmation.styles.css';
import Timer from '../../components/timer/timer.component';

class Confirmation extends React.Component {



    
    
    render(){
        return(
            <div className = 'pageConfirm'>
                <h2>Thank you for your submission</h2>
                <h2>Return soon for input from a doctor</h2>
                <Timer></Timer>
            </div>
        )
    }
}

export default Confirmation;
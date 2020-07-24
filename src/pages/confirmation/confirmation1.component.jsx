import React from 'react';
import './confirmation.styles.css';
import Timer from '../../components/timer/timer.component';

class Confirmation1 extends React.Component {



    
    
    render(){
        return(
            <div className = 'pageConfirm'>
                <h2>Thank you for using Panacea</h2>
                <br></br>
                <h2>Come back again if you have other problems!</h2>
                <Timer></Timer>
            </div>
        )
    }
}

export default Confirmation1;
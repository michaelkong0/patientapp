import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            minutes: 0,
            seconds: 10,
            
        }
    }
    

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

   

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                
                { minutes === 0 && seconds === 0
                    ? <Redirect to="/"/>
                    : <h1>Returning to start page in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}

export default Timer;
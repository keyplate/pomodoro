import { useContext, useRef, useState } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import Button from '../Button/Button';
import Clock from '../Clock';
import './Timer.css';

function Timer() {
    const {config} = useContext(ConfigContext);
    const {sessionSequence} = config
    const [sessionCounter, setSessionCounter] = useState(0);
    const [timePassed, setTimePassed] = useState(null);
    const intervalRef = useRef(1);
    const currentSessionDuration = config[sessionSequence[sessionCounter]];
    const FIVE_MINUTES = 300;
    
    
    const handleStart = () => {
        if (!timePassed) {
            setTimePassed(0);
        }
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
                setTimePassed(currentPassed => currentPassed + 1)
            }, 1000)
    };
    
    const handlePause = () => {
        clearInterval(intervalRef.current);
    };
    
    const nextSession = () => {
        //It was the last focus in the session, starting from the beginning
        if (sessionCounter === sessionSequence.length - 1) {
            setSessionCounter(0);
            return;
        }
        setSessionCounter(sessionCounter + 1);
    };
    
    const handleSkip = () => {
        nextSession();
        setTimePassed(0);
        handleStart();
    };
    
    const adjustSession = (minutes) => {
        setTimePassed(current => current - minutes);
    };
    
    
    let timeLeft = currentSessionDuration;
    if (timePassed) {
        timeLeft = currentSessionDuration - timePassed;
    }
    if (timeLeft <= 0) {
        setTimePassed(0);
        nextSession();
    }
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    return (
        <div className="timer-container">
            <div className="timer">
                <Clock minutes={minutes} seconds={seconds}></Clock>
                <div className="buttons">
                    <Button className="adjust plus-5" onClick={() => adjustSession(FIVE_MINUTES)}>+5</Button>
                    <Button onClick={handleStart}>Start</Button>
                    <Button onClick={handlePause}>Pause</Button>
                    <Button onClick={handleSkip}>Skip</Button>
                    <Button className="adjust minus-5" onClick={() => adjustSession(-FIVE_MINUTES)}>-5</Button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
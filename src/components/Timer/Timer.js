import { useContext, useRef, useState } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import Button from '../Button/Button';
import Clock from '../Clock';
import './Timer.css';
import useDidMountEffect from '../../hooks/UseDidMountEffect';

function Timer() {
    const {config} = useContext(ConfigContext);
    const {sessionSequence, autoStartFocus, autoStartBreak} = config
    const [sessionCounter, setSessionCounter] = useState(0);  //Starting session from the first one
    const [timePassed, setTimePassed] = useState(null);
    const [isPauesed, setIsPaused] = useState(true);
    const intervalRef = useRef(null);
    const currentSessionName = sessionSequence[sessionCounter]
    const currentSessionDuration = config[currentSessionName];
    const FIVE_MINUTES = 300;
    
    useDidMountEffect(() => {
        handleAutoStart();
    }, [sessionCounter]);

    const handleStartStop = () => {
        if (intervalRef.current) {
            pauseSession();
        } else {
            startSession();
        }
    };
    
    const startSession = () => {
        if (!timePassed) {
            setTimePassed(0);
        }
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
                setTimePassed(currentPassed => currentPassed + 1)
            }, 1000)
        setIsPaused(!isPauesed);
    };
    
    const pauseSession = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsPaused(true);
    };
    
    const nextSession = () => {
        //It was the last focus in the session, starting from the beginning
        if (sessionCounter === sessionSequence.length - 1) {
            setSessionCounter(0);
        } else {
            setSessionCounter(sessionCounter => sessionCounter + 1);
        }
    };

    const handleAutoStart = () => {
        const shouldStartCurrentBreak = autoStartBreak && currentSessionName.includes('break');
        const shouldStartCurrentFocus = autoStartFocus && currentSessionName.includes('focus');
        if (shouldStartCurrentBreak || shouldStartCurrentFocus) {
            startSession();
            return;
        }
        pauseSession();
    };
    
    const skipSession = () => {
        nextSession();
        setTimePassed(0);
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
                    <Button onClick={handleStartStop}>{isPauesed? 'Start' : 'Pause'}</Button>
                    <Button onClick={skipSession}>Skip</Button>
                    <Button className="adjust minus-5" onClick={() => adjustSession(-FIVE_MINUTES)}>-5</Button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
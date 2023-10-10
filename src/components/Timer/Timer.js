import { useContext, useRef, useState } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import useDidMountEffect from '../../hooks/UseDidMountEffect';
import SessionPanel from './SessionPanel';
import useAudio from '../../hooks/UseAudio';
import BackgroundColors from './BackgroundColors';
import TimerControlPanel from './TimerControlPanel';
import Clock from './Clock';
import './Timer.css';

function Timer() {
    const {config} = useContext(ConfigContext);
    const {
        sessionSequence,
        autoStartFocus,
        autoStartBreak} = config;

    const [sessionCounter, setSessionCounter] = useState(0);  //Starting session from the first one
    const [timePassed, setTimePassed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
    const [playAlarmSound] = useAudio(config.currentAlarm);
    const intervalRef = useRef(null);

    const currentSessionName = sessionSequence[sessionCounter];
    const currentSessionDuration = config[currentSessionName];

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
        setIsPaused(false);
    };

    const pauseSession = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsPaused(true);
    };

    const pickSession = (sessionName) => {
        if (sessionName === currentSessionName) {
            startSession();
        }
        /*
        * if focus and current is break or long break then just skip session
        * if break or long break and current is focus then just skip session
        * if long break and current is long break
        * */

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
        const shouldStartCurrentBreak = autoStartBreak &&
                        (currentSessionName.includes('break') || currentSessionName.includes('longBreak'));
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
        playAlarmSound();
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    return (
        <div className='timer-container'>
            <SessionPanel setSessionCounter={setSessionCounter} />
            <BackgroundColors currentSessionName={currentSessionName} sessionCounter={sessionCounter}>
            <div className='timer'>
                <Clock minutes={minutes} seconds={seconds}></Clock>
                <TimerControlPanel adjustSession={adjustSession}
                                   skipSession={skipSession}
                                   handleStartStop={handleStartStop}
                                   isPaused={isPaused} />
            </div>
            </BackgroundColors>
        </div>
    );
}

export default Timer;
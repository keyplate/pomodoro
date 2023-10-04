import { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import './BackgroundColor.css';

function BackgroundColors({currentSessionName, sessionCounter, children}) {
    const {config} = useContext(ConfigContext);
    const {
        sessionSequence,
        focus_background,
        break_background,
        long_break_background} = config;

    let first_color, second_color, third_color;

    const assignBackgroundColors = () => {
        if (currentSessionName === 'focus') {
            if (sessionCounter === sessionSequence.length - 2) {
                first_color = focus_background;
                second_color = long_break_background;
                third_color = break_background;
                return;
            }
            first_color = focus_background;
            second_color = break_background;
            third_color = long_break_background;
        }
        if (currentSessionName === 'break') {
            first_color = break_background;
            second_color = focus_background;
            third_color = long_break_background;
        }
        if (currentSessionName === 'longBreak') {
            first_color = long_break_background;
            second_color = focus_background;
            third_color = break_background;
        }
    };

    assignBackgroundColors();

    return (
            <div className='timer-background'>
                <div className='timer-background-focus' style={{backgroundColor: first_color}}></div>
                <div className='timer-background-break' style={{backgroundColor: second_color}}></div>
                {children}
            </div>
    );
}

export default BackgroundColors;
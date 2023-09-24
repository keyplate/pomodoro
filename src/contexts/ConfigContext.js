import { createContext, useReducer } from 'react';
import settingsReducer from '../reducers/SettingsReducer';

const ConfigContext = createContext({});

function Provider({ children }) {
    const [config, dispatch] = useReducer(settingsReducer, {
        focus: 600,
        break: 120,
        longBreak: 240,
        sessionSequence: ['focus', 'break', 'focus', 'break','focus', 'break', 'focus', 'longBreak'],
        autoStartFocus: true,
        autoStartBreak: true,
        focus_background: '#36469b',
        break_background: '#43d3cb',
        long_break_backgound: '#ff1493',
        alarmSounds: [
            {name: 'bird', path: './assets/bird.mp3'},
            {name: 'airport', path: './assets/airport.mp3'},
            {name: 'notification', path: './assets/notification.mp3'},
        ],
        currentAlarm: './assets/airport.mp3',
    });
    
    const configState = {
        config,
        dispatch
    };
    
    return (
        <ConfigContext.Provider value={configState}>
            {children}
        </ConfigContext.Provider>
    );
}

export default Provider;
export {ConfigContext};
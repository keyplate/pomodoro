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
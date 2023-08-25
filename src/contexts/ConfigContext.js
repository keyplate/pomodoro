import { createContext, useState } from 'react';

const ConfigContext = createContext({});

function Provider({ children }) {
    const [config, setConfig] = useState({
        sessionDurations: {
            focus: 600,
            rest: 120,
            longRest: 240
        },
        sessionSequence: ['focus', 'rest', 'focus', 'rest','focus', 'rest', 'focus', 'longRest'],
    });
    
    const configState = {
        config,
        setConfig
    };
    
    return (
        <ConfigContext.Provider value={configState}>
            {children}
        </ConfigContext.Provider>
    );
}

export default Provider;
export {ConfigContext};
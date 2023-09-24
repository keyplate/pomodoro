export const SET_FOCUS_DURATION = 'focus';
export const SET_BREAK_DURATION = 'break';
export const SET_LONG_BREAK_DURATION = 'longBreak';
export const SET_AUTO_START_BREAK = 'autoBreak';
export const SET_AUTO_START_FOCUS = 'autoFocus';
export const SET_ALARM_SOUND = 'sound';



function settingsReducer(config, action) {
    switch (action.type) {
        case SET_FOCUS_DURATION: {
            return {
                ...config,
                focus: action.payload,
            };
        }
        case SET_BREAK_DURATION: {
            return {
                ...config,
                break: action.payload,
            }
        }
        case SET_LONG_BREAK_DURATION: {
            return {
                ...config,
                longBreak: action.payload,
            }
        }
        case SET_AUTO_START_BREAK: {
            return {
                ...config,
                autoStartBreak: action.payload,
            }
        }
        case SET_AUTO_START_FOCUS: {
            return {
                ...config,
                autoStartFocus: action.payload,
            }
        }
        case SET_ALARM_SOUND: {
            console.log(action.payload)
            return {
                ...config,
                currentAlarm: action.payload
            }
        }
        default: {
            throw Error('Unsupported reducer action');
        }
    }
}

export default settingsReducer;
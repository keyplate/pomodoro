import {
    SET_AUTO_START_BREAK,
    SET_AUTO_START_FOCUS,
    SET_BREAK_DURATION,
    SET_FOCUS_DURATION,
    SET_LONG_BREAK_DURATION,
    SET_ALARM_SOUND
} from '../../reducers/SettingsReducer';
import { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';

function SettingsPage() {
    const {config, dispatch} = useContext(ConfigContext);
    const alarmSoundsList = config.alarmSounds.map(({name, path}) => {
        return (<option value={path} key={name}>{name}</option>);
    });
    
    return (
        <div className='settings-page'>
            <div className='settings-property'>
                <label>Foucs session</label>
                <input name='focus'
                    value={toMinutes(config.focus)? toMinutes(config.focus) : ''}
                    type='number'
                    onChange={(e) => dispatch({type: SET_FOCUS_DURATION, payload: toSeconds(e.target.value)})}
                />
            </div>
            <div className='settings-property'>
                <label>Short break</label>
                <input name='break'
                    value={toMinutes(config.break)? toMinutes(config.break) : ''}
                    type='number'
                    onChange={(e) => dispatch({type: SET_BREAK_DURATION, payload: toSeconds(e.target.value)})}
                />
            </div>
            <div className='settings-property'>
                <label>Long break</label>
                <input name='longBreak'
                    value={toMinutes(config.longBreak)? toMinutes(config.longBreak) : ''}
                    type='number'
                    onChange={(e) => dispatch({type: SET_LONG_BREAK_DURATION, payload: toSeconds(e.target.value)})}
                />
            </div>
            <div className='settings-property'>
                <label>Auto start break</label>
                <input name='autoStartBreak'
                    checked={config.autoStartBreak}
                    type='checkbox'
                    onChange={(e) => dispatch({type: SET_AUTO_START_BREAK, payload: e.target.checked})}/>
            </div>
            <div className='settings-property'>
                <label>Auto start focus session</label>
                <input name='autoStartFocus'
                    checked={config.autoStartFocus}
                    type='checkbox'
                    onChange={(e) => dispatch({type: SET_AUTO_START_FOCUS, payload: e.target.checked})}/>
            </div>
            <div className='settings-property'>
                <label>Alarm sound</label>
                <select className='settings-property'
                        name='alarmSound'
                        defaultValue={config.currentAlarm}
                        onChange={(e) => dispatch({type: SET_ALARM_SOUND, payload: e.target.value})}>
                    {alarmSoundsList}
                </select>
            </div>
        </div>
        );
}

function toMinutes(seconds) {
    return seconds / 60;
}

function toSeconds(minutes) {
    return minutes * 60;
}

export default SettingsPage;
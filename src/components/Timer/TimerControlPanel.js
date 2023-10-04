import Button from '../Button/Button';

const FIVE_MINUTES = 300;

function TimerControlPanel({ adjustSession, skipSession, handleStartStop, isPaused }) {
    
    return (
        <div className="timer-control">
            <Button className="adjust plus-5" onClick={() => adjustSession(FIVE_MINUTES)}>+5</Button>
            <Button onClick={handleStartStop}>{isPaused? 'Start' : 'Pause'}</Button>
            <Button onClick={skipSession}>Skip</Button>
            <Button className="adjust minus-5" onClick={() => adjustSession(-FIVE_MINUTES)}>-5</Button>
        </div>
    );
}

export default TimerControlPanel;
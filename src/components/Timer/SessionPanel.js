import './SessionPanel.css';
import Button from '../Button/Button'

function SessionPanel() {
    
    return (
        <div className='session-panel'>
            <Button>focus</Button>
            <Button>break</Button>
            <Button>long break</Button>
        </div>
    );
}

export default SessionPanel;
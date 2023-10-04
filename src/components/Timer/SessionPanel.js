import './SessionPanel.css';
import Button from '../Button/Button'

function SessionPanel() {
    
    return (
        <div className='session-panel'>
            <Button className="focus">focus</Button>
            <Button className="break">break</Button>
            <Button className="long-break">long break</Button>
        </div>
    );
}

export default SessionPanel;
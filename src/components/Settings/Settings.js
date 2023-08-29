import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import './Settings.css';
import SettingsPage from "./SettingsPage";

function Settings() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true)
    };
    
    const onClose = () => {
        setIsOpen(false)
    };

    return (
        <div className='settings'>
            <Button className='settings-button' onClick={handleClick}>
                <FiSettings></FiSettings>
            </Button>
            {isOpen? <Modal onClose={onClose} actionBar={<Button onClick={onClose}>Ok</Button>}><SettingsPage /></Modal> : ''}
        </div>
    );
}

export default Settings;
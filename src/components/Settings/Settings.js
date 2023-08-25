import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import {useContext, useState} from 'react';
import { FiSettings } from 'react-icons/fi';
import {ConfigContext} from '../../contexts/ConfigContext';

function Settings() {
    const {config, setConfig} = useContext(ConfigContext);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(true)
    };
    
    const onClose = () => {
        setIsOpen(false)
    };
    
    return (
        <div className="settings">
            <Button className="settings-button" onClick={handleClick}>
                <FiSettings></FiSettings>
            </Button>
            {isOpen? <Modal onClose={onClose}>Hello</Modal> : ''}
        </div>
    );
}

export default Settings;
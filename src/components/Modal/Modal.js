import { createPortal } from 'react-dom';
import './Modal.css';

function Modal({ children, onClose, actionBar }) {
    
    return createPortal((
        <div className="modal">
            <div className="modal-close" onClick={onClose}>
                
            </div>
            <div className="modal-content">
                {children}
            </div>
            <div className="modal-action">
                {actionBar}
            </div>
        </div>
    ), document.querySelector(".modal-container"));
}

export default Modal;
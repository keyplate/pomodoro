import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowLeft } from "react-icons/bs";
import { useState } from 'react';
import './Sidebar.css';

function Sidebar({children}) {
    const [isHidden, setIsHidden] = useState(true);
    
    const handleClick = () => {
        setIsHidden(current => !current);
    };
    
    const display = isHidden? {display: 'none'} : {display: 'block'};
    const icon = isHidden? (<GiHamburgerMenu></GiHamburgerMenu>) : (<BsArrowLeft></BsArrowLeft>);
    
    return (
        <div className="sidebar">
            <div className="sidebar-content" style={display}>
                {children}
            </div>
            <div className="hamburger" onClick={handleClick}>
                <div>
                   {icon}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
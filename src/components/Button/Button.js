import './Button.css';

function Button({ children, ...rest }) {
    const {className} = rest;
    
    return (
        <button {...rest} className={'button ' + className}>
            {children}
        </button>
    );
}

export default Button;
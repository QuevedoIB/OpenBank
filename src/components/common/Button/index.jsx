import Proptypes from 'prop-types';

import './Button.scss';

const Button = ({
    role = 'primary',
    onClick = () => null,
    type = 'button',
    classes = '',
    text,
    children,
    ...rest
}) => {
    return (
        <button
            className={`container ${role} ${classes}`}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children || <p>{text}</p>}
        </button>
    );
};

Button.propTypes = {
    role: Proptypes.oneOf(['primary', 'secondary']),
    onClick: Proptypes.func,
    type: Proptypes.oneOf(['button', 'submit']),
    text: Proptypes.string,
    classes: Proptypes.string,
    children: Proptypes.node,
};

export default Button;

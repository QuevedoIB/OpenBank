import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordVisibility = ({ visible, toggleVisibility }) => {
    return (
        <button type="button" onClick={toggleVisibility}>
            {visible ? (
                <AiOutlineEye size={'2rem'} />
            ) : (
                <AiOutlineEyeInvisible size={'2rem'} />
            )}
        </button>
    );
};

export default PasswordVisibility;

import { Field } from 'formik';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ label, name, id, children, icon, ...rest }) => {
    return (
        <div>
            {label && <label htmlFor={id || `input-${name}`}>{label}</label>}
            <Field name={name}>
                {({ field, meta }) => (
                    <>
                        <div className="input-container">
                            <input
                                id={id || `input-${name}`}
                                {...field}
                                {...rest}
                            />
                            {icon}
                        </div>
                        <div className="input-footer">
                            {meta.touched && meta.error && (
                                <p className="error-message">{meta.error}</p>
                            )}
                            {children}
                        </div>
                    </>
                )}
            </Field>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;

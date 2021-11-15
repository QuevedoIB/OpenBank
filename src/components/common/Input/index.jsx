import { Field } from 'formik';
import PropTypes from 'prop-types';

const Input = ({ label, name, id, ...rest }) => {
    return (
        <div>
            {label && <label htmlFor={id || `input-${name}`}>{label}</label>}
            <Field name={name}>
                {({ field, meta }) => (
                    <div>
                        <input
                            id={id || `input-${name}`}
                            {...field}
                            {...rest}
                        />
                        {meta.touched && meta.error && (
                            <p className="error-message">{meta.error}</p>
                        )}
                    </div>
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

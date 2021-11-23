
import SamaControlTextField from '../samaControlTextField/SamaControlTextField.js';

const renderInput = ({ meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps }, ...props }) => {
    return (
        <SamaControlTextField
            err={!!(touched && error)}
            hlpTxt={touched && error}
            tch={touched}
            {...inputProps}
            {...props}
        />
    );
};

export default renderInput;

import WithThemeTextField from '../WithThemeTextField/WithThemeTextField.js';

const WithThemeTextFieldRenderProps = ({ meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps }, ...props }) => {
    return (
        <WithThemeTextField
            err={!!(touched && error)}
            hlpTxt={touched && error}
            tch={touched}
            {...inputProps}
            {...props}
        />
    );
};

export default WithThemeTextFieldRenderProps;
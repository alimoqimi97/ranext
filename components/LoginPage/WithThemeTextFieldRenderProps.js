
import WithThemeTextField from '../WithThemeTextField/WithThemeTextField.js';

const WithThemeTextFieldRenderProps = ({ meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps }, ...props }) => {
    return (
        <WithThemeTextField
            isInErrorState={!!(touched && error)}
            errorMessage={touched && error}
            {...inputProps}
            {...props}
        />
    );
};

export default WithThemeTextFieldRenderProps;
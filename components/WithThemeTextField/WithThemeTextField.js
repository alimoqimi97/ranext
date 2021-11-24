import React from "react";
import TextField from "@material-ui/core/TextField";
import WithThemeTextFieldStyles from './WithThemeTextField.module.css';
import { withStyles } from "@material-ui/core/styles";

const NormalTextField = ({ classes, isInErrorState , errorMessage , input: { ...inputProps } , ...props }) => {
    return (
        <div>
            <TextField
                InputProps={{ classes }}
                error={isInErrorState}
                className={`${WithThemeTextFieldStyles.iranYekanFont} ${WithThemeTextFieldStyles.txtFieldFocus}`}
                InputLabelProps={{
                    classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                    }
                }}
                helperText={errorMessage}
                {...inputProps}
                {...props}
                fullWidth
            />
        </div>
    );
}

const textFieldTheme = {
    underline: {
        "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: "1px solid #65bc69"
        },
        "&:hover:not($disabled):before": {
            borderBottom: "1px solid "
        },
        "&:after": {
            borderBottom: "1px solid #31a05f"
        },
    },
    disabled: {},
    focused: {
        borderBottom: "1px solid #31a05f"
    },
    error: {},
    // labelRoot: {
    //     "&$labelFocused": {
    //         color: "green"
    //     }
    // },
    // labelFocused: {

    // }
};

const WithThemeTextField = withStyles(textFieldTheme)(NormalTextField);

export default WithThemeTextField;

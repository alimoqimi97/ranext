import React from "react";
import TextField from "@material-ui/core/TextField";
import stls from './SamaControlTextField.module.css';
import { withStyles } from "@material-ui/core/styles";

const SamaCntrlTextField = ({ classes, err , tch , hlpTxt , input: { ...inputProps } , ...props }) => {
    return (
        <div>
            <TextField
                InputProps={{ classes }}
                error={err}
                className={`${stls.iranYekanFont} ${stls.txtFieldFocus}`}
                InputLabelProps={{
                    classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                    }
                }}
                helperText={hlpTxt}
                {...inputProps}
                {...props}
                fullWidth
            />
        </div>
    );
}

const styles = {
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

const SamaControlTextField = withStyles(styles)(SamaCntrlTextField);

export default SamaControlTextField;

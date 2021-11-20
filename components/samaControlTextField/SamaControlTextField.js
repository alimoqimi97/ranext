import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    underline: {
        "&:before": {
            borderBottom: "1px solid #a1b2a9"
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: "1px solid #65bc69"
        },
        "&:after": {
            borderBottom: "1px solid #c29f41"
        }
    },
    disabled: {},
    focused: {},
    error: {}
};
function SamaCntrlTextField({ classes, err , tch , hlpTxt , input: { ...inputProps } , ...props  }) {
    return (
        <div>
            <TextField
                InputProps={{ classes }}
                error={err}
                className={`${styles.iranYekanFont} ${styles.txtFieldFocus}`}

                helperText={hlpTxt}

                {...inputProps}
                {...props}
                fullWidth
            />
        </div>
    );
}
const SamaControlTextField = withStyles(styles)(SamaCntrlTextField);

export default SamaControlTextField;

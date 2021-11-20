import React from "react";
import TextField from "@material-ui/core/TextField";
import stls from './SamaControlTextField.module.css';
import { withStyles } from "@material-ui/core/styles";


const styles = {
    underline: {
        // "&:before": {
        //     borderBottom: "1px solid #a1b2a9"
        // },
        "&:hover:not($disabled):not($focused):not($error):before": {
            // borderBottom: "1px solid #c29f41"
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
    error: {}
};

// for setting the color of textfields red when anything entered in them but any text to show, 
// we will set the error message in validity function in <ImprovedLoginPage /> component but don't 
// set helper text here, in the TextField(as show bellow): 

const SamaCntrlTextField = ({ classes, err , tch , hlpTxt , input: { ...inputProps } , ...props }) => {
    return (
        <div>
            <TextField
                InputProps={{ classes }}
                error={err}
                className={`${stls.iranYekanFont} ${stls.txtFieldFocus}`}

                // helperText={hlpTxt}

                {...inputProps}
                {...props}
                fullWidth
            />
        </div>
    );
}
const SamaControlTextField = withStyles(styles)(SamaCntrlTextField);

export default SamaControlTextField;

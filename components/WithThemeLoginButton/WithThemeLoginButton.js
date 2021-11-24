import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';

const WithThemeLoginButton = (props) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant="contained"
            type="submit"
            fullWidth
        >
            {props.children}
        </Button>
    );
}

const useStyles = makeStyles({
    root: {
        backgroundColor: '#65bc69 !important',
        '&:hover': {
            backgroundColor: '#31a05f !important'
    },
        fontWeight: '1000',
        fontFamily: "IranYekan !important",
    },
});


export default WithThemeLoginButton;


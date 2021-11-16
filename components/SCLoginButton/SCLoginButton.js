import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';


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


const SCLoginButton = (props) => {
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

export default SCLoginButton;


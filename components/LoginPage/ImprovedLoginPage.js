import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import styles from './ImprovedLoginPage.module.css';

import { RTL } from '../RTL/RTL.js';

import {
    Avatar,
    // Button,
    Card,
    CardActions,
    CircularProgress,
    TextField,
} from '@material-ui/core';
import Button from '@mui/material/Button';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import { Notification, useTranslate, useLogin, useNotify } from 'react-admin';
import SCLoginButton from '../SCLoginButton/SCLoginButton.js';

import { lightTheme } from './themes';

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'radial-gradient(circle,white,#65bc69,#31a05f)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        // backgroundColor: theme.palette.secondary.main,
        // backgroundColor: theme.palette.success.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: "#a21b2a9",
        // color: theme.palette.grey[500],
        fontFamily: 'IranYekan'
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
}));

const renderInput = ({
    meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps },
    ...props
}) => (
    <TextField
        error={!!(touched && error)}
        className={styles.iranYekanFont}
        inputProps={{
            className: `${styles.iranYekanFont} ${styles.samaDirtyColor} ${styles.samaBold}`
        }}
        // sx={{
        //     fontFamily: "IranYekan !important"
        // }}
        
        helperText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />
);

// interface FormValues {
//     username?: string;
//     password?: string;
// }

const { Form } = withTypes();

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const classes = useStyles();
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();


    // useEffect(() => {
    //     notify('Enter your username or password!',{
    //         type: 'success',
    //     });
    // },[loading]);


    const handleSubmit = (auth) => {
        setLoading(true);

        login().catch(() => {
            notify('an error occured in authenticating in improvedloginpage.js file');
        });



        // login(auth, location.state ? location.state.nextPathname : '/').catch(
        //     (error) => {
        //         setLoading(false);
        //         notify(
        //             typeof error === 'string'
        //                 ? error
        //                 : typeof error === 'undefined' || !error.message
        //                 ? 'ra.auth.sign_in_error'
        //                 : error.message,
        //             'warning',
        //             {
        //                 _:
        //                     typeof error === 'string'
        //                         ? error
        //                         : error && error.message
        //                         ? error.message
        //                         : undefined,
        //             }
        //         );
        //     }
        // );
    };

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };

    return (
            <Form
                onSubmit={handleSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={classes.main}>
                                <Card className={classes.card}>
                                    <div className={classes.avatar}>
                                        <Avatar className={classes.icon} alt="samaControl icon" src="./sclogo.png" />
                                        {/* <LockIcon /> */}
                                        {/* </Avatar> */}
                                    </div>
                                    <div className={`${classes.hint} ${styles.iranYekanFont}`}>
                                        <span>سماکنترل</span>
                                    </div>
                                    <div className={classes.form}>
                                        <div className={`${classes.input} ${styles.iranYekanFont}`} dir="rtl">
                                            <Field
                                                autoFocus
                                                name="username"
                                                // @ts-ignore
                                                component={renderInput}
                                                label="نام کاربری"
                                                // label={translate('ra.auth.username')}
                                                type="number"
                                                placeholder="09xxxxxxxxx"
                                                disabled={loading}
                                            />
                                        </div>
                                        <div className={classes.input} dir="rtl">
                                            <Field
                                                name="password"
                                                // @ts-ignore
                                                component={renderInput}
                                                label="رمزعبور"
                                                // label={translate('ra.auth.password')}
                                                type="password"
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>
                                    <CardActions className={`${classes.actions} ${styles.iranYekanFont}`}>
                                        <SCLoginButton>
                                            ورود
                                        </SCLoginButton>
                                        {/* <Button
                                            variant="contained"
                                            type="submit"
                                            color="success"
                                            disabled={loading}
                                            fullWidth
                                        >
                                            {loading && (
                                                <CircularProgress
                                                    size={25}
                                                    thickness={2}
                                                />
                                            )}
                                            ورود */}
                                            {/* {translate('ra.auth.sign_in')} */}
                                        {/* </Button> */}
                                    </CardActions>
                                </Card>
                                {/* <Notification /> */}
                            </div>
                        </form>
                        <Notification autoHideDuration={3000} />
                    </>
                )}
            />
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme
const LoginWithTheme = (props) => (
    <ThemeProvider theme={createMuiTheme(lightTheme)}>
        <Login {...props} />
    </ThemeProvider>
);

export default LoginWithTheme;
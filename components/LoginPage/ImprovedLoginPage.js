import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import styles from './ImprovedLoginPage.module.css';

import {
    Avatar,
    // Button,
    Card,
    CardActions,
    CircularProgress,
    TextField,
} from '@material-ui/core';
// import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, makeStyles } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import { Notification, useTranslate, useLogin, useNotify } from 'react-admin';
import SCLoginButton from '../SCLoginButton/SCLoginButton.js';

import { lightTheme } from './themes';


//      -------under testing part----------     //
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
//   createTheme
} from "@material-ui/core/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createTheme({ direction: "rtl" });

//      ------------------------------          //





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
        color: "#746e6a",
        // color: "#5a5b47",
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
            className: `${styles.iranYekanFont} ${styles.samaDirtyColor} ${styles.samaBold} ${styles.inputLtrDirection}`
        }}
        helperText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />
);

const { Form } = withTypes();

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const classes = useStyles();
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();

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
            // errors.uername = 'الزامی';
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            console.log(translate('ra.validation.required'));

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
                                    <Avatar className={classes.icon} alt="samaControl icon" src="./SCL.png" />
                                    {/* <LockIcon /> */}
                                    {/* </Avatar> */}
                                </div>
                                <div className={`${classes.hint} ${styles.iranYekanFont} ${styles.samaBold}`}>
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
                                            placeholder="شماره تلفن همراه"
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
                                            placeholder="رمز عبور"
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
    // <ThemeProvider theme={createTheme(lightTheme)}>
    <ThemeProvider theme={rtlTheme}>
        <StylesProvider jss={jss}>
        <Login {...props} />
        </StylesProvider>
    </ThemeProvider>
);

export default LoginWithTheme;
import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import loginPageStyles from './LoginPage.module.css';
import {
    Avatar,
    Card,
    CardActions,
} from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { Notification, useTranslate, useLogin, useNotify } from 'react-admin';
import WithThemeLoginButton from '../WithThemeLoginButton/WithThemeLoginButton.js';
import scssStyles from "./scss/ImprovedLoginPage.module.scss";
import {
    ThemeProvider,
} from "@material-ui/core/styles";
import CustomizedTextFieldRenderProps from './WithThemeTextFieldRenderProps.js';

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

    };


    const validate = (values) => {
        const errors = {};

        const phoneNumberPattern = /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

        if (!values.username) {
            errors.username = translate('ir.validation.required');
        }else if(!phoneNumberPattern.test(values.username)){
            errors.username = translate('ir.validation.wrong_phone_format');
        }

        if (!values.password) {
            errors.password = translate('ir.validation.required');
        }

        return errors;
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <>
                    <div className={classes.main}>
                        <Card className={classes.card}>
                            <div className={classes.avatar}>
                                <Avatar className={classes.icon} alt="samaControl icon" src="./samacontrolLogo.png" />
                            </div>
                            <div className={`${classes.hint} ${loginPageStyles.iranYekanFont} ${loginPageStyles.samaBold}`}>
                                <span>{translate('ir.labels.samacontrol_name')}</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className={classes.form}>
                                    <div className={`${classes.input} ${loginPageStyles.iranYekanFont}`} >
                                        <Field
                                            autoFocus
                                            name="username"
                                            component={CustomizedTextFieldRenderProps}
                                            label={translate('ir.auth.phone_number')}
                                            maxLength={11}
                                            type="tel"
                                            inputProps={{
                                                className: scssStyles.inputStyle,
                                            }}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className={classes.input} >
                                        <Field
                                            name="password"
                                            component={CustomizedTextFieldRenderProps}
                                            label={translate('ir.auth.password')}
                                            inputProps={{
                                                className: scssStyles.inputStyle
                                            }}
                                            type="password"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>
                                <CardActions className={`${classes.actions} ${loginPageStyles.iranYekanFont}`}>
                                    <WithThemeLoginButton>
                                        {translate('ir.auth.log_in')}
                                    </WithThemeLoginButton>
                                </CardActions>
                            </form>
                        </Card>
                    </div>
                    <Notification autoHideDuration={3000} />
                </>
            )}
        />
    );
};

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
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: "#746e6a",
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
    textField: {
        '&:focus': {
            color: "#31a05f",
        }
    }
}));

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme.
const LoginWithTheme = (props) => (
    <ThemeProvider theme={rtlTheme}>
        <Login {...props} />
    </ThemeProvider>
);

const rtlTheme = createTheme({ direction: "rtl" });


export default LoginWithTheme;
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import {
    Button,
    CardActions,
    CircularProgress,
    TextField,
} from '@material-ui/core';
// import {Button} from '@mui/material/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslate, useLogin, useNotify, useSafeSetState } from 'ra-core';
import styles from './LoginPage.module.css';


const useStyles = makeStyles(
    (theme) => ({
        form: {
            padding: '0 1em 1em 1em',
        },
        input: {
            marginTop: '1em',
        },
        button: {
            width: '100%',
            // backgroundCcolor: '#57b53f !important'
        },
        icon: {
            marginRight: theme.spacing(1),
        },
    }),
    { name: 'RaLoginForm' }
);

const myStyle = {
    backgroundCcolor: '#57b53f !important'
}

const Input = ({
    meta: { touched, error }, // eslint-disable-line react/prop-types
    input: inputProps, // eslint-disable-line react/prop-types
    ...props
}) => (
    <TextField
        error={!!(touched && error)}
        helperText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />
);

const LoginForm = (props) => {
    const { redirectTo } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const login = useLogin();
    const translate = useTranslate();
    const notify = useNotify();
    const classes = useStyles(props);

    const validate = (values) => {
        const errors = { username: undefined, password: undefined };

        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };

    const submit = values => {
        setLoading(true);

        login().catch(() => {
            notify('an error occured in authenticating in loginpage.jsx...!');
        })

        // login(values, redirectTo)
        //     .then(() => {
        //         setLoading(false);
        //     })
        //     .catch(error => {
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
        //     });
    };

    return (
        <Form
            onSubmit={submit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className={classes.form}>
                        <div className={classes.input}>
                            <Field
                                autoFocus
                                id="username"
                                name="username"
                                component={Input}
                                label={translate('ra.auth.username')}
                                disabled={loading}
                            />
                        </div>
                        <div className={classes.input}>
                            <Field
                                id="password"
                                name="password"
                                component={Input}
                                label={translate('ra.auth.password')}
                                type="password"
                                disabled={loading}
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <CardActions>
                        <Button
                            variant="contained"
                            type="submit"
                            color="error"
                            disabled={loading}
                            className={classes.button}

                            // style={style}
                            // sx={{
                            //     backgroundColor: '#57b53f'
                            // }}
                        >
                            {loading && (
                                <CircularProgress
                                    className={classes.icon}
                                    size={18}
                                    thickness={2}
                                />
                            )}
                            {translate('ra.auth.sign_in')}
                        </Button>
                    </CardActions>
                </form>
            )}
        />
    );
};

LoginForm.propTypes = {
    redirectTo: PropTypes.string,
};

export default LoginForm;
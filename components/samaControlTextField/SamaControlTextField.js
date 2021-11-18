import * as React from 'react';
import {TextField} from '@material-ui/core';


const SamaControlTextField = () => {
    return (
        <TextField
        error={!!(touched && error)}
        className={`${styles.iranYekanFont} ${styles.txtFieldFocus}`}
        inputProps={{
            className: `${styles.iranYekanFont} ${styles.samaDirtyColor} ${styles.samaBold} ${styles.inputLtrDirection} `,
            // pattern: "(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}",
            type: 'tel',
        }}

        style={{
            borderColor: "green",
        }}

        // helperText={touched && error}

        {...inputProps}
        {...props}
        fullWidth
    />
    );
}
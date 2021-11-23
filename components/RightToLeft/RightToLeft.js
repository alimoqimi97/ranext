import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, createTheme, ThemeProvider } from '@material-ui/core/styles';

const RightToLeft = (props) => {
    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    );
}

// configure jss.
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const rtlTheme = createTheme({ direction: "rtl" });

export default RightToLeft;
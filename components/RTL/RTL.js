
// import { create } from 'jss';
// import rtl from 'jss-rtl';
// import JssProvider from 'react-jss/lib/JssProvider';
// import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// // Configure JSS
// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// // Custom Material-UI class name generator.
// const generateClassName = createGenerateClassName();

// function RTL(props) {
//   return (
//     <JssProvider jss={jss} generateClassName={generateClassName}>
//       {props.children}
//     </JssProvider>
//   );
// }

// export default RTL;



import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

export default RTL;
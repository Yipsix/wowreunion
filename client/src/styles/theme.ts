import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700 } from './colors';

export default getMuiTheme({
   fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
   palette: {
       primary1Color: blue500,
       primary2Color: blue700,
       pickerHeaderColor: blue500,
       borderColor: blue500
   }
});
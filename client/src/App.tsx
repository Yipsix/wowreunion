import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from '../src/styles/theme';
import DataContainer from './pages/dataContainer';
// import login from './components/login';

class App extends React.Component {
  
  public render() {
    const style = {
      height: '100%',
    };
    return (
      <div style={style} className="App">
        <MuiThemeProvider muiTheme={lightTheme}>
          <DataContainer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

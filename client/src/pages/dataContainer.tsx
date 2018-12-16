import * as React from 'react';
import Login from './login';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Datacaller from './dataCaller';
import Header from './Header';

interface Props {
  loading: boolean;
  isAuthenticated: boolean;
  user: string;
}

const style = {
  height: '100%',
  alignContent: 'center',
};

class DataContainer extends React.Component<Props> {
  public render() {
    
    return (
      <div id="DC" style={style}>
        <Header/>
        {this.props.isAuthenticated ? (<Datacaller/>) : (<Grid
          style={style}
          container={true}
          alignItems="center"
          justify="center"
        >
          <Login />
        </Grid>)}
        
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
  loading: auth.loading,
  isAuthenticated: auth.isAuthenticated,
  user: auth.user
});

export default connect(
  mapStateToProps
)(DataContainer);

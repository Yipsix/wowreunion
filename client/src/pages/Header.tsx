import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { signOut } from '../store/auth/actions';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';

interface Props {
  loading: boolean;
  isAuthenticated: boolean;
  user: string;
  signOut: typeof signOut;
}

class Header extends React.Component<Props> {
  
  handleClick(event: any) {
    console.log('clicked');
    this.props.signOut();
  }

  public render() {
    
    return (
        <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container={true} spacing={24}>
                <Grid item={true} xs={4}>
                    <Typography align="center" variant="title" color="inherit">
                        Fogedbogen 
                    </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography align="center" color="inherit">
                        {this.props.loading ? 'loading' : 'not loading'}
                    </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography align="center" color="inherit">
                        {this.props.isAuthenticated ? 
                        <Button onClick={(event) => this.handleClick(event)} variant="outlined">Logout</Button> : ''}
                    </Typography>
                </Grid>
            </Grid>   
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
  loading: auth.loading,
  isAuthenticated: auth.isAuthenticated,
  user: auth.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

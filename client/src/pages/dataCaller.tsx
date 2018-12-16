import * as React from 'react';
import { signOut } from '../store/auth/actions';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface Props {
    loading: boolean;
    isAuthenticated: boolean;
    user: string;
    signOut: typeof signOut;
}
  
class DataCaller extends React.Component<Props> {
    handleClick(event: any) {
        console.log('clicked');
    }

    public render() {
    const styleH = {
        height: '100%',
        alignContent: 'center',
    };
    const style = {
        borderColor: '#d6d7da',
        borderRadius: 8,
        borderWidth: 0.5,
        padding: 50,
        margin: 20,
        alignContent: 'center',
        width: '200px'
        
    };

    return (
      <div style={styleH}>
          <Typography align="center" variant="title" color="inherit">
                        welcome: {this.props.user}
            </Typography>
            <Grid
                container={true}
                alignItems="center"
                justify="center"
            >
            <Paper style={style}>
                <form id="outputForm" method="post" action="/api/login">
                    <Input 
                        id="messageInput"
                        defaultValue="send a message"
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <br />
                    <br />
                    <Button variant="outlined">Send</Button>
                </form>
                
            </Paper>
            </Grid>
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
  )(DataCaller);
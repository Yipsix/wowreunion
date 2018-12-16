import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signIn } from '../store/auth/actions';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Paper from '@material-ui/core/Paper';

interface Props {
    loading: boolean;
    isAuthenticated: boolean;
    user: string;
    signIn: typeof signIn;
}
  
class Login extends React.Component<Props> {

  handleClick(event: any) {
    console.log('clicked');
    this.props.signIn('asd', 'sad');
  }

  public render() {

    const style = {
        borderColor: '#d6d7da',
        borderRadius: 8,
        borderWidth: 0.5,
        padding: 50
    };

    return (
      <div>
      <Paper style={style}>
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)} />
        </Paper>
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
    signIn: (user: string, pass: string) => dispatch(signIn(user, pass))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
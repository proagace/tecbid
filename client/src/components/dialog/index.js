import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '500px',
};

export default class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() {
    this.props.callback(this.handleOpen);
  };

  handleSubmit = () => {
    this.props.firebase.auth().signInWithEmailAndPassword(document.getElementById('user').value, document.getElementById('password').value)
    .then(() => {
      const user = this.props.firebase.auth().currentUser;
      //user.sendEmailVerification().then(console.log('Email sent'));
      this.props.setUser(user);
    })
    .catch(err => {
      alert(err.message);
    });
    this.handleClose();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Entrar"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Realize Login"
        actions={actions}
        modal={false}
        contentStyle={customContentStyle}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        <center>
          <TextField
            floatingLabelText="Usuario"
            id="user"
            defaultValue="admin@tecbid.com.br"
          /><br />
          <TextField
            floatingLabelText="Senha"
            type="password"
            id="password"
            defaultValue="a12345"
          /><br />
        </center>
      </Dialog>
    );
  }
}
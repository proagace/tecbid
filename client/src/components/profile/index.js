import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

const styles = {
  avatar: {border: '3px solid white', zIndex: 1, marginTop: '85px'},
  infoBar: {backgroundColor: '#872429', height: '50px'},
  info: {marginLeft: '150px'},
  infoText: {padding: '75px 0 0 50px'},
  toggle: {maxWidth: '200px', color: 'white', marginLeft: '350px', paddingTop: '10px'},
  background: {background: 'linear-gradient(grey, white)', height: '200px'},
  thumbSwitched: {backgroundColor: 'rgb(245, 245, 245)'},
  trackSwitched: {backgroundColor: 'rgb(189, 189, 189)'},
  button: {right: '42px', top: '246px', position: 'absolute'},
};

class Comprador extends Component {
  render() {
    return (
      <div>
        <h1>DADOS PESSOAIS</h1>
        E-MAIL: {this.props.user.email}<br />
        TELEFONE: {this.props.user.tel}<br />
        ENDEREÇO: {this.props.user.endereco}<br />
      </div>
    );
  }
}

class Leiloeiro extends Component {
  render() {
    return (
      <div>
        <h1>DADOS DA EMPRESA</h1>
        RAZÃO SOCIAL: {this.props.user.razaoSocial}<br />
        CNPJ: {this.props.user.cnpj}<br />
        E-MAIL: {this.props.user.emailEmpresa}<br />
        TELEFONE: {this.props.user.telEmpresa}<br />
        ENDEREÇO: {this.props.user.enderecoEmpresa}<br />
      </div>
    );
  }
}

class InfoBar extends Component {
  render() {
    return (
      <div style={styles.background}>
        <table style={styles.info}>
          <tbody>
            <tr>
            <td>
              <Avatar
                icon={<AccountCircle />}
                src={typeof this.props.user.img !== 'undefined' ? "http://localhost:8080/images/" + this.props.user.img : null}
                size={150}
                style={styles.avatar}
              />
            </td>
            <td>
              <div style={styles.infoText}>
                {this.props.user.pFisica ? 'PESSOA FÍSICA' : 'PESSOA JURÍDICA'}<br />
                {this.props.user.nome}<br />
                {this.props.user.idade}<br />
              </div>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { comprador: true };
  }

  changeInnerPage = (evt, newValue) => {
    this.setState({comprador: !newValue});
  };

  render() {
    return (
      <div style={{marginTop: '64px'}}>
        <InfoBar user={this.props.user}/>
        <div style={styles.infoBar}>
        <table style={styles.toggle}>
          <tbody>
            <tr>
              <td>Comprador</td>
              <td>
                <Toggle 
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                  onToggle={this.changeInnerPage}
                />
              </td>
              <td> Leiloeiro</td>
            </tr>
          </tbody>
        </table>
        <RaisedButton
          label="EDITAR"
          labelPosition="before"
          primary={true}
          icon={<ModeEdit />}
          style={styles.button}
        />
        </div>
        {this.state.comprador ? <Comprador user={this.props.user}/> : <Leiloeiro user={this.props.user}/>}
      </div>
    );
  }
}

export default Profile;
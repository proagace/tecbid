import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import EyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Leilometer from '../leilometer';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  avatar: {border: '3px solid white', zIndex: 1, marginTop: '85px'},
  infoBar: {backgroundColor: '#4B4B4D', height: '50px'},
  info: {marginLeft: '150px'},
  infoText: {padding: '0 0 0 50px'},
  toggle: {color: 'white', marginLeft: '350px'},
  background: {background: 'linear-gradient(grey, white)', height: '200px'},
  thumbOff: {backgroundColor: 'white', top: '9px', left: '7px'},
  trackOff: {height: '25px', backgroundColor: '#4B4B4D', border: '3px solid white'},
  thumbSwitched: {backgroundColor: 'white', top: '9px', left: '99%'},
  trackSwitched: {backgroundColor: '#4B4B4D', height: '25px', border: '3px solid white'},
  button: {right: '42px', top: '246px', position: 'absolute'},
  dadosUsuario: {width: '50%', marginLeft: 'auto'},
  notification: {right: '190px', top: '241px', position: 'absolute'},
  badge: {backgroundColor: '#872429', color: 'white', top: 12, right: 12}
};

class LeiloesTable extends Component {
  render() {
    return (
      <Paper zDepth={2} style={{width: '75%', margin: '50px auto 0 auto'}}>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>PRODUTO</TableHeaderColumn>
              <TableHeaderColumn>LANCE ATUAL</TableHeaderColumn>
              <TableHeaderColumn>LÍDER</TableHeaderColumn>
              <TableHeaderColumn>OPERAÇÃO</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              {/* Adicionar conteúdo em loop, quando os valores estiverem sendo carregados
                  dinâmicamente */}
              <TableRowColumn>Microondas</TableRowColumn>
              <TableRowColumn>R$ 2000,00</TableRowColumn>
              <TableRowColumn>Voce!</TableRowColumn>
              <TableRowColumn>
                <center>
                  <IconButton><EyeIcon /></IconButton>
                  <IconButton><CloseIcon /></IconButton>
                </center>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const notifications = [
  {
    data: '26/11/2017',
    msg: "mensagem teste1",
  },
  {
    data: '26/11/2017',
    msg: "mensagem teste2",
  },
  {
    data: '26/11/2017',
    msg: "mensagem teste3",
  },
  {
    data: '26/11/2017',
    msg: "mensagem teste4",
  }
];

class Notificacoes extends Component {
  render() {
    return(
      <div style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1>Notificações</h1>
        {notifications.map((notification) => (
          <div key={notification.msg}>
            <h3>{notification.data}</h3>
            <p>{notification.msg}</p>
          </div>
        ))}
      </div>
    );
  }
}

class Comprador extends Component {
  render() {
    return (
      <div>
        <h1>DADOS PESSOAIS</h1>
        E-MAIL: {this.props.user.email}<br />
        TELEFONE: {this.props.user.tel}<br />
        ENDEREÇO: {typeof this.props.user.endereco !== 'undefined' ? 
        this.props.user.endereco.cidade + ', ' +this.props.user.endereco.estado : null}<br />
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
        ENDEREÇO: {typeof this.props.user.enderecoEmpresa !== 'undefined' ? 
        this.props.user.enderecoEmpresa.cidade + ', ' +this.props.user.enderecoEmpresa.estado : null}<br />
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
                <div style={{fontWeight: 'bold', fontSize: '30px'}}>{this.props.user.nome}</div><br />
                CPF:{' '}{this.props.user.cpf}<br />
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
    this.state = { comprador: true, notificationMode: false };
  }

  changeInnerPage = (evt, newValue) => {
    this.setState({comprador: !newValue});
  };

  toggleNotifications = () => {
    this.setState({notificationMode: !this.state.notificationMode});
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
              <td style={{paddingRight: '18px'}}>
                <Toggle 
                  thumbStyle={styles.thumbOff}
                  trackStyle={styles.trackOff}
                  iconStyle={{width: '100px'}}
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                  onToggle={this.changeInnerPage}
                />
              </td>
              <td>Leiloeiro</td>
            </tr>
          </tbody>
        </table>
        <Badge
          badgeContent={4}
          style={styles.notification}
          badgeStyle={styles.badge}
        >
          <IconButton 
            style={this.state.notificationMode ? {backgroundColor: 'slategrey'} : null} 
            tooltip="Notificações" onClick={this.toggleNotifications}
          >
            <NotificationsIcon color='white'/>
          </IconButton>
        </Badge>
        <RaisedButton
          backgroundColor='#872429'
          labelColor="white"
          label="EDITAR"
          labelPosition="before"
          icon={<ModeEdit />}
          style={styles.button}
        />
        </div>
        {this.state.notificationMode ?
          <Notificacoes /> : 
          <div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <Leilometer />
              <div style={styles.dadosUsuario}>
                {this.state.comprador ? <Comprador user={this.props.user}/> : <Leiloeiro user={this.props.user}/>}
              </div>
            </div>
            <LeiloesTable />
          </div>}
      </div>
    );
  }
}

export default Profile;
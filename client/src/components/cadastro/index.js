import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = ["AC","AL","AM","AP","AB","CE","DF","ES","GO","MA",
"MG","MS","MT","PA","PB","PI","PR","RJ","RN","RS","RO","SC","SE","SP","TO"];

const styles = {
  bgHeader: {backgroundColor: '#E6E7E8', padding: '30px 0 30px 0'},
  mainPaper: {/*display: 'inline-block', margin: '16px 32px 20px 0'*/},
  paper: {margin: '16px 32px 16px 32px'},
  conteudoPaper: {marginLeft: '25%'},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  floatingLabelStyle:{color: 'black', fontSize: '110%'},
  underlineStyle: {borderColor: '#8B2F31'},
  dados : {marginLeft:"10%"},
  textMargin:{marginLeft: "15px"},
  customWidth: { width: 100, marginLeft: "15px"},
}

class Header extends Component{
  render(){
    return(
      <div style={styles.bgHeader} >
      <center>
        <div style={styles.bgHeader}>
          <h1>Faça parte dos leilões!</h1>
          <p>Preencha os dados abaixo para efetivar a criação de sua conta.</p>
        </div>
      </center>
      </div>
    );
  }
}

class Fisica extends Component{
  render(){
    return(
      <div style={styles.tipo}>
        <Paper style={styles.mainPaper}>
            <span style={styles.conteudoPaper} >Tipo de Conta</span>
            <Divider />
            <Paper style={styles.paper}>
              <img style={{width: "50%", marginLeft: "40px"}}  src={require('../images/user.png')} alt="error" />
            </Paper>
            <div style={styles.paper}>
              <h3>Física</h3>
              <span>Quero cadastrar minha</span> <br />
              <span>conta pessoal</span> <br />
            </div>
        </Paper>
      </div>
    );
  }
}

class Juridica extends Component{
  render(){
    return(
      <div style={styles.tipo}>
        <Paper style={styles.mainPaper}>
            <span style={styles.conteudoPaper} >Tipo de Conta</span>
            <Divider />
            <Paper style={styles.paper}>
              <img style={{width: "50%", marginLeft: "40px"}}  src={require('../images/user.png')} alt="error" />
            </Paper>
            <div style={styles.paper}>
              <h3>Jurídica</h3>
              <span>Quero cadastrar minha</span> <br />
              <span>empresa</span> <br />
            </div>
        </Paper>
      </div>
    );
  }
}

class DadosFisica extends Component{
  constructor(props){
    super(props);
    this.state = {
      cpf: DadosFisica.cpf,
      nome: DadosFisica.nome,
      tel: DadosFisica.tel,
      email: DadosFisica.email,
      pwd: DadosFisica.pwd,

    };
  }
  static cpf = '';
  static nome= '';
  static tel = '';
  static email = '';
  static pwd = '';

  _handleCpfChange(event,value){ DadosFisica.cpf=value; this.setState({cpf: value}); }
  _handleNomeChange(event,value){ DadosFisica.nome=value; this.setState({nome: value});}
  _handleTelChange(event,value){ DadosFisica.tel=value; this.setState({tel: value});}
  _handleEmailChange(event,value){ DadosFisica.email=value; this.setState({email: value});}
  _handlePwdChange(event,value){ DadosFisica.pwd=value; this.setState({pwd: value});}

  render(){
    return(
      <div style={styles.root}>
        <div>
          <TextField
            floatingLabelText="CPF"
            hintText="Exemplo: 123.456.789-10"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.cpf}
            onChange={this._handleCpfChange.bind(this)}          

          />
          <TextField
            floatingLabelText="NOME COMPLETO"
            hintText="Exemplo: João da Silva"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textMargin}
            value={this.state.nome}
            onChange={this._handleNomeChange.bind(this)}          



          /> <br />
          <TextField
            floatingLabelText="E-MAIL"
            hintText="Exemplo: tecbid@tecbid.com"
            floatingLabelFixed={true}
            type="email"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.email}
            onChange={this._handleEmailChange.bind(this)}             

          /> 
          <TextField
            floatingLabelText="SENHA"
            floatingLabelFixed={true}
            type="password"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textMargin}
            value={this.state.pwd}
            onChange={this._handlePwdChange.bind(this)}             
          /><br />                            
          <TextField
            floatingLabelText="TELEFONE"
            hintText="Exemplo: (11)4828-4828"
            floatingLabelFixed={true}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.tel}
            onChange={this._handleTelChange.bind(this)}             
          /> 
        </div>
      </div>         
    );
  }
}

class DadosJuridica extends Component{
  constructor(props){
    super(props);
    this.state = {
      cnpj: DadosJuridica.cnpj,
      razao: DadosJuridica.razao,
      telj: DadosJuridica.telj,
      emailj: DadosJuridica.emailj,
      nomer: DadosJuridica.nomer,
      pwdj: DadosJuridica.pwdj,

    };
  }
  static cnpj = '';  
  static razao = '';  
  static telj = '';  
  static emailj = '';  
  static nomer = '';  
  static pwdj = '';  

  _handleCnpjChange(event,value){ DadosJuridica.cnpj=value; this.setState({cnpj: value});}
  _handleRazaoChange(event,value){ DadosJuridica.razao=value; this.setState({razao: value});}
  _handleTeljChange(event,value){ DadosJuridica.telj=value; this.setState({telj: value});}
  _handleEmailjChange(event,value){ DadosJuridica.emailj=value; this.setState({emailj: value});}
  _handleNomerChange(event,value){ DadosJuridica.nomer=value; this.setState({nomer: value});}
  _handlePwdjChange(event,value){ DadosJuridica.pwdj=value; this.setState({pwdj: value});}


  render(){
    return(
      <div>
        <div>
          <TextField
            floatingLabelText="CNPJ"
            hintText="Exemplo: 12.345.678/1234-56"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.cnpj}
            onChange={this._handleCnpjChange.bind(this)}             


          />
          <TextField
            floatingLabelText="RAZÃO SOCIAL"
            hintText="Exemplo: Tecbid Ltda."
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            style={styles.textMargin}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.razao}
            onChange={this._handleRazaoChange.bind(this)}             

          /> <br />
          <TextField
            floatingLabelText="TELEFONE"
            hintText="Exemplo: (11)4828-4828"
            floatingLabelFixed={true}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.telj}
            onChange={this._handleTeljChange.bind(this)}             

          /> 
          <TextField
            floatingLabelText="NOME DO REPRESENTANTE"
            hintText="Exemplo: João da Silva"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.nomer}
            onChange={this._handleNomerChange.bind(this)}             
            style={styles.textMargin}

          /> <br />                          
          <TextField
            floatingLabelText="E-MAIL"
            hintText="Exemplo: tecbid@tecbid.com"
            floatingLabelFixed={true}
            type="email"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.emailj}
            onChange={this._handleEmailjChange.bind(this)}             
          /> 
          <TextField
            floatingLabelText="SENHA"
            floatingLabelFixed={true}
            type="password"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textMargin}
            value={this.state.pwdj}
            onChange={this._handlePwdjChange.bind(this)}             
          />           
        </div>
      </div>         
    );
  }
}

class Localizacao extends Component{


  constructor(props){
    super(props);
    this.state = {
      value: 1,
      cep: Localizacao.cep,
      end: Localizacao.end,
      bairro: Localizacao.bairro,
      estado: Localizacao.estado,
      cidade: Localizacao.cidade,
      num: Localizacao.num,
      comp: Localizacao.comp,

    }
  }

  static cep = '';  
  static end = '';  
  static bairro = '';  
  static estado = '';  
  static cidade = '';  
  static num = '';  
  static comp = '';  

  handleEstadoChange = (event, index, value) => {Localizacao.estado=value; this.setState({estado:value}); this.setState({value})}


  handleChangeTeste = (event, index, value) => {
    this.setState({value});
  };
  _handleCepChange(event,value){ Localizacao.cep=value; this.setState({cep: value});}
  _handleEndChange(event,value){ Localizacao.end=value; this.setState({end: value});}
  _handleBairroChange(event,value){ Localizacao.bairro=value; this.setState({bairro: value});}
  //_handleEstadoChange(event,value){ Localizacao.estado=value; this.setState({estado: value});}
  _handleCidadeChange(event,value){ Localizacao.cidade=value; this.setState({cidade: value});}
  _handleNumChange(event,value){ Localizacao.num=value; this.setState({num: value});}
  _handleCompChange(event,value){ Localizacao.comp=value; this.setState({comp: value});}



  render(){
    return(
      <div>
        <div>
          <TextField
            floatingLabelText="CEP"
            hintText="Exemplo: 09411-720"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.cep}
            onChange={this._handleCepChange.bind(this)}              
          />
          <TextField
            floatingLabelText="ENDEREÇO"
            hintText="Exemplo: R. Bell Alliance, 200"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textMargin}
            value={this.state.end}
            onChange={this._handleEndChange.bind(this)}              
          /> <br />
          <TextField
            floatingLabelText="BAIRRO"
            hintText="Exemplo: Jardim São Caetano"
            floatingLabelFixed={true}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.bairro}
            onChange={this._handleBairroChange.bind(this)}              
          /> 
          <SelectField
            style={styles.customWidth}
            floatingLabelText="ESTADO"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelFixed={true}
            floatingLabelStyle={styles.floatingLabelStyle}
            value={this.state.estado}
            onChange={this.handleEstadoChange}
          >
            {items.map(op => (<MenuItem key={op} value={op} primaryText={op} />))}
          </SelectField> <br />
          <TextField
            floatingLabelText="CIDADE"
            hintText="Exemplo: São Caetano do Sul"
            floatingLabelFixed={true}
            type="email"
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.cidade}
            onChange={this._handleCidadeChange.bind(this)}              
          /> 
          <TextField
            floatingLabelText="NÚMERO"
            hintText="Exemplo: 200"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            style={styles.textMargin}
            value={this.state.num}
            onChange={this._handleNumChange.bind(this)}              
          /> <br />
          <TextField
            floatingLabelText="COMPLEMENTO"
            hintText="Exemplo: CASA A"
            floatingLabelFixed={true}
            underlineFocusStyle={styles.underlineStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            value={this.state.comp}
            onChange={this._handleCompChange.bind(this)}              
            style={styles.textMargin}
          />       
        </div>
      </div>         
    );
  }
}

 class Cadastro extends React.Component {
  constructor(){
    super();
    this.state = {
      mobileMode: false,
      fisica : true,
      finished: false,
      stepIndex: 0,
    };
    this.styles = {
      normal: {marginTop: '64px'},
      mobile: {backgroundColor: 'blue', marginTop: '64px'},
    };
  }


    static user = '';
    static pwd = '';
    
  

  handleSubmit = () => {
      
      this.user= this.state.fisica ? DadosFisica.email : DadosJuridica.emailj;
      this.pwd= this.state.fisica ? DadosFisica.pwd : DadosJuridica.pwdj;
      this.props.firebase.auth().createUserWithEmailAndPassword(this.user, this.pwd)
      .then(console.log('ok'))
      .catch(err => {
        alert(err.message);
      });
    } 

  storeFisica = (users) => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf: DadosFisica.cpf,
        email: DadosFisica.email,
        nome: DadosFisica.nome,
        pFisica: true,
        tel: DadosFisica.tel,
        endereco: Localizacao.end,
        cep: Localizacao.cep,
        bairro: Localizacao.bairro,
        estado: Localizacao.estado,
        cidade: Localizacao.cidade,
        numero: Localizacao.num,
        complemento: Localizacao.comp,
      })
    })
    .then(() => {
      console.log('ok');
      alert('Cadastrado com sucesso!');
    })    
    .catch(err => console.log(err));
  };

  storeJuridica = (users) => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cnpj: DadosJuridica.cnpj,
        razaosocial: DadosJuridica.razao,
        tel: DadosJuridica.telj,
        nomerepRepr: DadosJuridica.nomer, 
        email: DadosJuridica.emailj,
        pFisica: false,
        endereco: Localizacao.end,
        cep: Localizacao.cep,
        bairro: Localizacao.bairro,
        estado: Localizacao.estado,
        cidade: Localizacao.cidade,
        numero: Localizacao.num,
        complemento: Localizacao.comp,
      })
    })
    .then(() => {
      console.log('ok');
      alert('Cadastrado com sucesso!');
    })  
    .catch(err => console.log(err));
  };  

  changeInnerPage = () => {
    this.setState({fisica: !this.state.fisica});    
  };


  clear = () => {
    DadosFisica.cpf='';
    DadosFisica.nome='';
    DadosFisica.tel='';
    DadosFisica.email='';
    DadosFisica.pwd='';
    DadosJuridica.pwdj='';
    DadosJuridica.cnpj='';
    DadosJuridica.razao='';
    DadosJuridica.telj='';
    DadosJuridica.emailj='';
    DadosJuridica.nomer='';
    Localizacao.cep='';
    Localizacao.end='';
    Localizacao.bairro='';
    Localizacao.estado='';
    Localizacao.cidade='';
    Localizacao.num='';
    Localizacao.comp='';
    this.setState({stepIndex: 0});
  }




  handleNext() {
    let stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
       finished: stepIndex >= 1,
    });
  }

  handlePrev() {
    let stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({
      stepIndex: stepIndex - 1
      });
    }
  }
  
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          this.state.fisica ? <DadosFisica /> : <DadosJuridica />
        );
      case 1:
        return (
          <Localizacao />
        );
      default:
        return 'Error';
    }
  }


  render() {
    return (
      <div style={ this.state.mobileMode ? this.styles.mobile : this.styles.normal }>
        <Header />
        <div style={{paddingTop: "60px", margin: '0 auto', width: '50%'}}>
          <div style={styles.root}>
            <div style={{marginRight: '25px'}} >
              {this.state.fisica ? <Fisica /> : <Juridica />}
              <RaisedButton 
                label="Trocar"
                backgroundColor='#585570'
                labelColor='#ffffff'
                onClick={ () => {
                  this.changeInnerPage();
                  this.clear();
                  }}                
                style={{marginLeft:"25%"}} 

              />
            </div>  
            <div >
                  <div>
                    <h3>Dados Necessários</h3>
                    {this.getStepContent(this.state.stepIndex)}
                    <div style={{marginTop: 12}}>
                      <RaisedButton
                        label="Voltar"
                        disabled={this.state.stepIndex === 0}
                        onClick={this.handlePrev.bind(this)}
                        style={{marginRight: 12}}
                        backgroundColor='#8B2F31'
                        labelColor='#ffffff'
                      />

                      {this.state.stepIndex === 1 ?                       
                      <RaisedButton
                        label='Cadastrar'
                        backgroundColor='#8B2F31'
                        onClick={ () => {
                          this.state.fisica ? this.storeFisica() : this.storeJuridica();
                          this.handleSubmit();
                          this.clear();
                        }}
                        labelColor='#ffffff'
                      /> 
                      :
                        <RaisedButton
                        label='Avançar'
                        backgroundColor='#8B2F31'
                        onClick={this.handleNext.bind(this)}
                        labelColor='#ffffff'
                      /> 

                    }
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>         
    );
  }
}

export default Cadastro;
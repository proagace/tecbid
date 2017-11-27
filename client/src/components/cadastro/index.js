import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const items = [
  <MenuItem value={1} primaryText="AC" />,
  <MenuItem value={2} primaryText="AL" />,
  <MenuItem value={3} primaryText="AM" />,
  <MenuItem value={4} primaryText="AP" />,
  <MenuItem value={5} primaryText="AB" />,
  <MenuItem value={6} primaryText="CE" />,
  <MenuItem value={7} primaryText="DF" />,
  <MenuItem value={8} primaryText="ES" />,
  <MenuItem value={9} primaryText="GO" />,
  <MenuItem value={10} primaryText="MA" />,
  <MenuItem value={11} primaryText="MG" />,
  <MenuItem value={12} primaryText="MS" />,
  <MenuItem value={13} primaryText="MT" />,
  <MenuItem value={14} primaryText="PA" />,
  <MenuItem value={15} primaryText="PB" />,
  <MenuItem value={16} primaryText="PI" />,
  <MenuItem value={17} primaryText="PR" />,
  <MenuItem value={18} primaryText="RJ" />,
  <MenuItem value={19} primaryText="RN" />,
  <MenuItem value={20} primaryText="RS" />,
  <MenuItem value={21} primaryText="RO" />,
  <MenuItem value={22} primaryText="SC" />,
  <MenuItem value={23} primaryText="SE" />,
  <MenuItem value={24} primaryText="SP" />,
  <MenuItem value={25} primaryText="TO" />,

];  

const styles = {
  bgHeader: {backgroundColor: '#E6E7E8', padding: '15px 0 15px 0'},
  mainPaper: {display: 'inline-block', margin: '16px 32px 20px 0', paddingBottom:"200px"},
  paper: {margin: '16px 32px 16px 32px'},
  conteudoPaper: {marginLeft: '25%'},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  floatingLabelStyle:{color: 'black', fontSize: '150%'},
  underlineStyle: {borderColor: '#8B2F31'},
  dados : {},
  textMargin:{marginLeft: "15px"},
  customWidth: { width: 100, marginLeft: "15px" },
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
      <div style={styles.dados}>
        <Paper style={styles.mainPaper}>
            <span style={styles.conteudoPaper} >Tipo de Conta</span>
            <Divider />
            <Paper style={styles.paper}>
              <img style={{"width": "50%"}}  src={require('../images/escolha.png')} alt="error" />
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
      <div style={styles.dados}>
        <Paper style={styles.mainPaper}>
            <span style={styles.conteudoPaper} >Tipo de Conta</span>
            <Divider />
            <Paper style={styles.paper}>
              <img style={{"width": "50%"}}  src={require('../images/escolha.png')} alt="error" />
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

        /> <br />
        <TextField
          floatingLabelText="TELEFONE"
          hintText="Exemplo: (11)4828-4828"
          floatingLabelFixed={true}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /> 
        <TextField
          floatingLabelText="E-MAIL"
          hintText="Exemplo: tecbid@tecbid.com"
          floatingLabelFixed={true}
          type="email"
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          style={styles.textMargin}

        />                
      </div>
       </div>         
    );
  }
}

class DadosJuridica extends Component{
  render(){
    return(
      <div style={styles.root}>
      <div>
        <TextField
          floatingLabelText="CNPJ"
          hintText="Exemplo: 12.345.678/1234-56"
          floatingLabelFixed={true}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

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
        /> <br />
        <TextField
          floatingLabelText="TELEFONE"
          hintText="Exemplo: (11)4828-4828"
          floatingLabelFixed={true}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /> 
        <TextField
          floatingLabelText="E-MAIL"
          hintText="Exemplo: tecbid@tecbid.com"
          floatingLabelFixed={true}
          type="email"
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          style={styles.textMargin}

        /> <br />
        <TextField
          floatingLabelText="NOME DO REPRESENTANTE"
          hintText="Exemplo: João da Silva"
          floatingLabelFixed={true}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          style={styles.textMargin}
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
      value : 1,
    }
  }

  handleChange = (event, index, value) => this.setState({value});  

  render(){
    return(
      <div style={styles.root}>
      <div>
        <TextField
          floatingLabelText="CEP"
          hintText="Exemplo: 09411-720"
          floatingLabelFixed={true}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

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
        /> <br />
        <TextField
          floatingLabelText="BAIRRO"
          hintText="Exemplo: Jardim São Caetano"
          floatingLabelFixed={true}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        /> 
        <SelectField
          style={styles.customWidth}
          floatingLabelText="ESTADO"
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelFixed={true}
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelStyle={styles.floatingLabelStyle}

        >
          {items}
        </SelectField> <br />
        <TextField
          floatingLabelText="CIDADE"
          hintText="Exemplo: tecbid@tecbid.com"
          floatingLabelFixed={true}
          type="email"
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
        /> <br />  
        <TextField
          floatingLabelText="COMPLEMENTO"
          hintText="Exemplo: CASA A"
          floatingLabelFixed={true}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />       
      </div>
       </div>         
    );
  }
}

class Cadastro extends Component{
  constructor(props) {
    super(props);
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

  changeInnerPage = () => {
    this.setState({fisica: !this.state.fisica});
  };


  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.state.fisica ? <DadosFisica /> : <DadosJuridica />;
      case 1:
        return <Localizacao />;
      default:
        return 'Error';
    }
  }

  render(){
    const {finished, stepIndex} = this.state;

    return(
      <div style={ this.state.mobileMode ? this.styles.mobile : this.styles.normal }>
        <Header />
        <div style={styles.root}>
          {this.state.fisica ? <Fisica /> : <Juridica />}

          <div>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Dados Pessoais</StepLabel>
            </Step>
            <Step>
              <StepLabel>Endereço</StepLabel>
            </Step>
          </Stepper>


        <div >
            {finished ? (
              <p>
                <RaisedButton
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                  label="Resetar Exemplo"
                />
              </p>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{marginTop: 12}}>
                  <RaisedButton
                    label="Voltar"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                    backgroundColor={'#8B2F31'}
                    labelColor={'white'}
                  />
                  <RaisedButton
                    label={stepIndex === 1 ? 'Cadastrar' : 'Avançar'}
                    backgroundColor={'#8B2F31'}
                    onClick={this.handleNext}
                    labelColor={'white'}
                  />
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
        <RaisedButton 
          label="Trocar"
          backgroundColor={'#585570'}
          labelColor={'white'}
          onClick={this.changeInnerPage}
        />
      </div>


    );
  }
}

export default Cadastro;
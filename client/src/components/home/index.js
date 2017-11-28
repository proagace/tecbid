import React, { Component } from 'react';
import Grid from '../grid'; 
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';

const items = [
  <MenuItem key={1} value={1} primaryText="Automotivo" />,
  <MenuItem key={2} value={2} primaryText="Beleza e Saúde" />,
  <MenuItem key={3} value={5} primaryText="Decoraçao" />,
  <MenuItem key={4} value={5} primaryText="Informática" />,
  <MenuItem key={5} value={5} primaryText="Eletrodomésticos" />,
  <MenuItem key={6} value={5} primaryText="Celulares e Telefonia" />,
  <MenuItem key={7} value={5} primaryText="Eletrônicos" />,
  <MenuItem key={8} value={5} primaryText="Esportes e Lazer" />,
  <MenuItem key={9} value={5} primaryText="Outros" />,
];  

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '30px',
  },
  title: {
    fontFamily: 'arial',
    color: 'red',
    fontSize: '120%'
  },
  underlineStyle: {
    borderColor: '#8B2F31',
  },
  subtitle:{fontSize: '100%'},
  menu:{backgroundColor: '#872429'},
  btnMenu:{color: 'white'},
  floatingLabelStyle:{color: 'black', fontSize: '150%'},
  searchMenu:{marginLeft: '25%',marginRight: '25%'},
  search: {float: 'right'},
  image:{width: '40%', height: '40%'},
  imageCad:{width: '50%', height: '40%'},
  imgRight:{marginRight: '10%'},
  imgLeft:{marginLeft: '10%'},
  pesquisa:{backgroundColor: '#E6E7E8', marginTop: '50px', paddingTop: '20px', paddingBottom: '20px'},

};


class Tutorial extends Component{
  render(){
    return(
      <div>
        <center>
          <h1 style={{color:"#872429", paddingTop:"20px"}}>Como funciona o leilão TecBid</h1>
          <div style={styles.root}> 
              <div style={{marginLeft:"10%"}}>
                <img style={styles.imageCad} src={require('../images/cadastrese.png')} alt="error"  />
                <p style={styles.title}>CADASTRE-SE</p>
                <span style={styles.subtitle}>garanta sua participação</span> <br />
                <span style={styles.subtitle}>nos leilões e avalie</span> <br />
                <span style={styles.subtitle}>os produtos</span> <br />
              </div>
              <div>
                <img style={styles.image} src={require('../images/escolha.png')} alt="error" />
                <p style={styles.title}>ESCOLHA UM PRODUTO</p>
                <p style={styles.subtitle}>é só selecionar uma categoria</p>                
              </div>
              <div>
                <img style={styles.image} src={require('../images/levante.png')} alt="error" />
                <p style={styles.title}>LEVANTE A MÃO</p>
                <p style={styles.subtitle}>quantas vezes quiser</p>                
              </div>
              <div style={{marginRight:"10%"}} >
                <img style={styles.image} src={require('../images/aguarde.png')} alt="error" />
                <p style={styles.title}>AGUARDE A DATA FINAL</p>
                <p style={styles.subtitle}>e ganhe!</p>                
              </div>
          </div>
        </center>
      </div>        
    );
  }
}


class MainMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : 1,
    }
  }

  handleChange = (event, index, value) => this.setState({value});  

  render(){
    return(
      <div>
        <div style={styles.pesquisa}>
          <div style={styles.searchMenu}>
            <TextField
              underlineFocusStyle={styles.underlineStyle}
              underlineStyle={styles.underlineStyle}
              hintText="Pesquisar"
              floatingLabelFixed={true}
              floatingLabelText="Pesquisar"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <RaisedButton
              backgroundColor={'#8B2F31'}
              icon={<ActionSearch color={fullWhite} />}
              style={styles.button}
            />
            <SelectField
              underlineFocusStyle={styles.underlineStyle}
              underlineStyle={styles.underlineStyle}
              floatingLabelFixed={true}
              style={styles.search}
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText="Fitrar"
              floatingLabelStyle={styles.floatingLabelStyle}
            >
              {items}
            </SelectField>
          </div>
        </div>

        <div style={styles.menu}>
          <center>
            <FlatButton style={styles.btnMenu} label="TOP LEILÕES" />
            <FlatButton style={styles.btnMenu} label="FINALIZADOS" />
            <FlatButton style={styles.btnMenu} label="PRÓXIMOS" />
          </center>
        </div>
      </div>
    );
  }
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: null,
      mobileMode: false,
    };
    this.styles = {
      normal: {marginTop: '64px'},
      mobile: {backgroundColor: 'blue', marginTop: '64px'},
    };
  }

  handleProducts = (resp) => {
    this.setState({produtos: (<Grid tilesData={resp}/>)});
  };

  update = mobileMode => {
    this.setState({mobileMode: mobileMode});
  };

  componentWillMount() {
    this.props.subscribe(this.update);
    fetch('http://localhost:8080/produtos')
    .then(resp => {
      if (!resp.ok)
          throw resp.statusText;
        return resp; })
    .then(resp => {return resp.json()})
    .then(this.handleProducts);
  }

  render(){
    return(
      <div style={ this.state.mobileMode ? this.styles.mobile : this.styles.normal }>
        <Tutorial />
        <MainMenu />
        {this.state.produtos}
      </div>
    );
  }
}

export default Home;
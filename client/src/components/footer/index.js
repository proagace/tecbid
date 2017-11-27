import React, { Component } from 'react';
import './footer.css';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '20px',
  },
  cat:{
    marginLeft: '20%',
  },
  conect:{
    marginRight: '20%',
  },  
  image:{
    width: '45px',
    margin: '10px'
  },
}

class Footer extends Component {
  render(){
    return(
      <div style={styles.root} className="footer" >
          <div style={styles.cat}>
            <h4>Categorias</h4>
            <a href="">Automotivo</a><br />
            <a href="">Beleza e Saúde</a><br />
            <a href="">Binquedos e Jogos</a><br />
            <a href="">Decoração</a><br />
            <a href="">Informática</a><br />
            <a href="">Eletrodomésticos</a><br />
            <a href="">Celulares e Telefonia</a><br />
            <a href="">Eletrônicos</a><br />
            <a href="">Esporte e Lazer</a><br />
            <a href="">Outros</a><br />
          </div>
          <div>
            <h4>Contato</h4>
            <span>E-mail:</span> <br / >
            <a href="">consulink@empresa.com.br</a> <br /> <br />
            <span>GithHub:</span> <br />
            <a href="">github.com/proagace/tecbid</a>
          </div>
          <div style={styles.conect}>
              <h4>Conecte-se</h4>
              <a href=""><img style={styles.image} alt="imagem não encontrada" src={require('../images/facebook.png')} /></a>
              <a href=""><img style={styles.image} alt="imagem não encontrada" src={require('../images/youtube.png')} /></a>
              <a href=""><img style={styles.image} alt="imagem não encontrada" src={require('../images/twitter.png')} /></a>          
              <a href=""><img style={styles.image} alt="imagem não encontrada" src={require('../images/instagram.png')} /></a>
          </div>
      </div>



      );
  }


}

export default Footer;
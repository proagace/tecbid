import React, { Component } from 'react';
import '../App.css';
import './style.css';
import ProdutoDesc from './produtodesc'
import ProdutoLances from './produtolances'

const prodStyle = {
    marginRight: 'auto' ,
    marginLeft: 'auto' , 
    width: '50%'
};

const tituloProdStyle = {
    marginTop: '85px'
};


class Publicacao extends Component {
  constructor(props) {
      super(props);
      this.state = {
          drawerOpened: false,
      };
  }

  componentWillMount() {
    this.getProduto();
  }

  getProduto = () => {
    this.setState({produto: undefined});
    fetch('http://localhost:8080/produtos/' + this.props.match.params.id)
    .then(resp => {
      if (!resp.ok)
          throw resp.statusText;
        return resp; })
    .then(resp => resp.json())
    .then(prod => {
      this.setState({produto: prod});
    })
    .catch(err => console.log(err));
  }

  atualizarProduto = (vlrLance) => {
      fetch('http://localhost:8080/produtos/' + this.props.match.params.id, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          vlrAtual: vlrLance,
          qtdLances: this.state.produto.qtdLances + 1,
        })
      })
      .then(() => this.getProduto())
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
          {typeof this.state.produto !== "undefined" ? 
        <div>
            <div style={prodStyle}>
              <h2 style={tituloProdStyle}>{this.state.produto.nome}</h2>
              <div>
              <h5>{this.state.produto.carac}</h5>
              </div>
            </div>
            <div>
                <ProdutoDesc produto={this.state.produto} updateProd={this.atualizarProduto}/>
                <ProdutoLances produto={this.state.produto} updateProd={this.atualizarProduto}/>
            </div>
        </div>:
        null
        }
        </div>
    );
  }
}

export default Publicacao;

import React, { Component } from 'react';
import Grid from '../grid'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: null,
    };
  }

  handleProducts = (resp) => {
    this.setState({produtos: (<Grid tilesData={resp}/>)});
  }

  componentWillMount() {
    this.handleProducts([
      {
        imgProduto: "../home/produto.png",
        nomeProduto: "Microondas 1"
      },
      {
        imgProduto: "../home/produto.png",
        nomeProduto: "Microondas 2"
      },
      {
        imgProduto: "../home/produto.png",
        nomeProduto: "Microondas 3"
      },
      {
        imgProduto: "../home/produto.png",
        nomeProduto: "Microondas 4"
      },
    ]);
    /*
    fetch('http://localhost:8080/produtos')
    .then(resp => {
      if (!resp.ok)
          throw resp.statusText;
        return resp; })
    .then(resp => {return resp.json()})
    .then(this.handleProducts);
    */
  }

  render(){
    return(
      <div style={{"margin-top": "64px"}}>
        {this.state.produtos}
      </div>
    );
  }
}

export default Home;
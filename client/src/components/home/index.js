import React, { Component } from 'react';
import Grid from '../grid'; 

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
        {this.state.produtos}
      </div>
    );
  }
}

export default Home;
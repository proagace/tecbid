import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  root: {width: '50%', marginRight: 'auto', alignContent: 'center'},
  progress: {width: '150px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '50px'},
  innerNumber: {width: '75px', marginLeft: 'auto', fontSize: '2.5em', marginRight: 'auto', marginTop: '-103px', 
    marginBottom: '72px'},
  content: {width: '75%', marginRight: 'auto', marginLeft: 'auto'},
}

export default class Leilometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 67};
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.progress}>
          <CircularProgress
            color={'rgb(255, 139, 40)'}
            mode="determinate"
            value={this.state.value}
            size={150}
            thickness={15}
          />
          <div style={styles.innerNumber}>{this.state.value + '%'}</div>
        </div>
        <center>
          <h1>Leilões Ganhos</h1>
          ENTRE TODOS OS LEILÕES<br/>
          QUE VOCÊ PARTICIPOU
        </center>
      </div>
    );
  }
}
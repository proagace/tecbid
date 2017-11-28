import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    margin: '0 auto 0 auto',
    height: '100%',
  },
  gridTile: {
    margin: '5px 5px 5px 5px',
    padding: '0 50px 0 50px',
    cursor: 'pointer',
    border: '3px solid lightgrey',
  }
};

class LeilaoTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: new Date(props.finalDate).getTime() - new Date().getTime() 
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      time: this.state.time - 1000
    });
  }

  render() {
    return (
      <div style={{fontSize: '30px', marginTop: '10px'}}>
        {new Date(this.state.time).getDate()}
        {" Dias "}
        {new Date(this.state.time).getHours()}
        {":"}
        {new Date(this.state.time).getMinutes()}
        {":"}
        {new Date(this.state.time).getSeconds()}
      </div>
    );
  }
}

class GridListProdutos extends React.Component {
  goPub = id => {
    alert(id);
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight={300}
          style={styles.gridList}
        >
          {this.props.tilesData.map((tile) => (
            <GridTile
              key={tile._id}
              title={
                <div>
                  <div style={{fontSize: '20px'}}>{tile.nome}</div>
                  <div style={{fontSize: '15px'}}>{tile.desc}</div>
                  <LeilaoTimer startDate={tile.startDate} finalDate={tile.finalDate}/>
                </div>
              }
              cols={1}
              rows={1}
              titleBackground="rgba(0, 0, 0, 0)"
              titleStyle={{color: 'black', textAlign: 'center', height: '137px'}}
              style={styles.gridTile}
              onClick={() => this.goPub(tile._id)}
            >
              <div style={{width: '200px', height: '200px', margin: '0 auto'}}>
                <img src={'http://localhost:8080/produtos/images/' + tile.img} alt="error"/>
              </div>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridListProdutos;
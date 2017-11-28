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
    if (this.state.time > 0) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  }

  componentWillUnmount() {
    if(this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick = () => {
    if(this.state.time - 1000 <= 0) {
      clearInterval(this.timerID);
    }
    this.setState({
      time: this.state.time - 1000
    });
  };

  convertToReadable = (time) => {
    let x = time / 1000;
    let seconds = parseInt(x % 60, 10);
    x /= 60;
    let minutes = parseInt(x % 60, 10);
    x /= 60;
    let hours = parseInt(x % 24, 10);
    x /= 24;
    let days = parseInt(x, 10);
    return days + " Dias " + hours + ":" + minutes + ":" + seconds;
  };

  render() {
    return (
      <div style={{fontSize: '30px', marginTop: '10px'}}>
        { this.state.time <= 0 ? <div>Leilão Terminado!</div> :
          <div>
            {this.convertToReadable(this.state.time)}
          </div>
        }
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
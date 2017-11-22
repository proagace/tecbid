import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    overflowY: 'auto',
  },
  gridTile: {
    padding: '0 50px 0 50px',
    cursor: 'pointer',
  }
};

export default class GridListExampleSimple extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
        >
          {this.props.tilesData.map((tile) => (
            <GridTile
              key={tile.imgProduto}
              title={tile.nomeProduto}
              style={styles.gridTile}
            >
              <img src={require('../home/produto.png')} alt="error"/>
              {/*<img src={'http://localhost:8080/produtos/images/' + tile.imgProduto} alt="error"/>*/}
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}


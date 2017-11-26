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
  goPub = id => {
    alert(id);
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
        >
          {this.props.tilesData.map((tile) => (
            <GridTile
              key={tile._id}
              title={tile.nome}
              style={styles.gridTile}
              onClick={() => this.goPub(tile._id)}
            >
              <img src={'http://localhost:8080/produtos/images/' + tile.img} alt="error"/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}


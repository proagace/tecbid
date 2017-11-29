import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {purple500, pink500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: purple500,
        accent1Color: pink500
    }

});

const prodStyle = {
    width: '50%' ,
    marginLeft: 'auto' ,
    marginRight: 'auto' 
};


const imgStyle = {
    width: '50%' ,
    marginTop: '5%'

};


class ProdutoDesc extends Component {
    state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div style={prodStyle}>
                <Table selectable={this.state.selectable}>
                    <TableBody displayRowCheckbox={this.state.showCheckboxes} showRowHover={this.state.showRowHover}>
                        <TableRow>
                            <TableRowColumn colSpan="2">
                                <div>
                                    <img style={imgStyle} alt="imagem não encontrada"  src={require('./console.png')} />
                                </div>
                            </TableRowColumn>

                            <TableRowColumn colSpan="2">
                                    <TableRow>
                                    <p class="situacaoProd" >Aberto Para Lances</p>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn >
                                        <p class="situacaoLances" >Lance Inicial:</p>
                                        <p class="situacaoLances" >Último Lance:</p>
                                        <p class="situacaoLances" >Lance Mínimo:</p>
                                        <p class="situacaoLances" >Início:</p>
                                        <p class="situacaoLances" >Término:</p>
                                        <p class="situacaoLances" >Localização:</p>
                                        </TableRowColumn>
                                        <TableRowColumn >
                                        <p class="situacaoLances" >1200,00</p>
                                        <p class="situacaoLances" >1700,00</p>
                                        <p class="situacaoLances" >+500,00</p>
                                        <p class="situacaoLances" >28/08/2017 ás 9:00</p>
                                        <p class="situacaoLances" >30/08/2017 ás 18:00</p>
                                        <p class="situacaoLances" >São Paulo, SP</p>
                                        </TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn >
                                            <TextField
                                              id="text-field-default"
                                              defaultValue="R$ 2200,00"
                                              style={{width: '100px'}}
                                            />
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <RaisedButton icon={<img alt="imagem não encontrada"  src={require('./handsup.png')} />} backgroundColor='#872429' />
                                        </TableRowColumn>
                                    </TableRow>
                            </TableRowColumn>

                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default ProdutoDesc;

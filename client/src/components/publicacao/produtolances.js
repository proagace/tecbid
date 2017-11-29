import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const testStyle1 = {
    marginLeft: '30%'

}
const testStyle2 = {
    backgroundColor: 'pink'
}

const visitasbar = {
    backgroundColor: '#eae8e8'
}


const imgStyle2 = {
    width: '7%' ,
    marginLeft: '47%'
}
const imgStyle3 = {
    width: '40px' ,
    marginLeft: '2%' , 
}

const visitasText = {
    marginBottom: '20%'
}
const visitasText2 = {
    marginBottom: '20%' ,
    marginLeft: '17%'
}

const infoProd = {
    marginLeft: '26%' ,
    marginTop: '2%'
}


class ProdutoLances extends Component {
    constructor(props) {
        super(props);
        this.state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
      };
    }


    
  render() {
    return (
            <div >
                <Table selectable={this.state.selectable} style={visitasbar}>
                    <TableBody displayRowCheckbox={this.state.showCheckboxes} showRowHover={this.state.showRowHover}>
                    <TableRow>
                        <TableRowColumn style={{textAlign: 'center'}}>
                        <div style={testStyle1}>
                            <p>Total De Lances </p>
                            <div style={imgStyle2}>
                                <img alt="imagem não encontrada" src={require('./ic_local_atm_black_24dp_2x.png')} />
                                <div style={visitasText}>{this.props.produto.qtdLances}</div>
                            </div>
                            
                        </div>
                        </TableRowColumn>
                        <TableRowColumn>
                            <p>Nº de visitas </p>
                            <div style={imgStyle3}>
                                <img alt="imagem não encontrada" src={require('./207-eye.png')} />
                                <div style={visitasText2}>{this.props.produto.visitas}</div>
                            </div>
                            
                        </TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
                <div style={infoProd}>
                <p>Autor</p>
                <p>{this.props.produto.autor}</p>
                <p>Descrição</p>
                <p>{this.props.produto.desc}</p>
                </div>
                <div style={testStyle2}>
                <Table>
                <TableBody displayRowCheckbox={this.state.showCheckboxes} showRowHover={this.state.showRowHover}>
                <TableRow>
                    <TableRowColumn>
                        <Table style={{ width: 400, marginLeft: '50%'}}>
                        <TableBody displayRowCheckbox={this.state.showCheckboxes} showRowHover={this.state.showRowHover}>
                            <TableRow>
                                <TableRowColumn>
                                Usuario
                                </TableRowColumn>
                                <TableRowColumn>
                                Lance
                                </TableRowColumn>
                                <TableRowColumn>
                                DataHora
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                Usuario
                                </TableRowColumn>
                                <TableRowColumn>
                                Lance
                                </TableRowColumn>
                                <TableRowColumn>
                                DataHora
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </TableRowColumn>
                    <TableRowColumn>
                        <Table style={{ width: 400, marginRight: '26%', float: 'left' }}>
                        <TableBody displayRowCheckbox={this.state.showCheckboxes} showRowHover={this.state.showRowHover}>
                            <TableRow>
                                <TableRowColumn>
                                Usuario
                                </TableRowColumn>
                                <TableRowColumn>
                                Lance
                                </TableRowColumn>
                                <TableRowColumn>
                                Data/Hora
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>
                                Usuario
                                </TableRowColumn>
                                <TableRowColumn>
                                Lance
                                </TableRowColumn>
                                <TableRowColumn>
                                DataHora
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </TableRowColumn>

                </TableRow>
                </TableBody>
                </Table>
                </div>


                
            </div>
    );
  }
}

export default ProdutoLances;

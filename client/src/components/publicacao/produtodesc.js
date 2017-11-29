import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const prodStyle = {
    width: '50%' ,
    marginLeft: 'auto' ,
    marginRight: 'auto' 
};

const imgStyle = {
    width: '50%' ,
    marginTop: '5%'

}


class ProdutoDesc extends Component {
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

    handsUp = (vlrLance) => {
        this.props.updateProd(vlrLance);
    };

  render() {
    const vlrLance = (Number.parseFloat(this.props.produto.vlrAtual) + Number.parseFloat(this.props.produto.lanceMinimo));
    return (
            <div style={prodStyle}>
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false} showRowHover={this.state.showRowHover}>
                        <TableRow>
                            <TableRowColumn colSpan="2">
                                <div>
                                    <img style={imgStyle} src={'http://localhost:8080/images/' + this.props.produto.img} alt="error" />
                                </div>
                            </TableRowColumn>

                            <TableRowColumn colSpan="2">
                                    <TableRow>
                                    <p className="situacaoProd" >{this.props.produto.status === 'ativo' ? "Aberto para leilão" : "Finalizado"}</p>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn >
                                        <p className="situacaoLances" >Lance Inicial:</p>
                                        <p className="situacaoLances" >Valor Atual:</p>
                                        <p className="situacaoLances" >Valor Lance:</p>
                                        <p className="situacaoLances" >Início:</p>
                                        <p className="situacaoLances" >Término:</p>
                                        <p className="situacaoLances" >Localização:</p>
                                        </TableRowColumn>
                                        <TableRowColumn >
                                        <p className="situacaoLances" >{this.props.produto.vlrInicial}</p>
                                        <p className="situacaoLances" >{this.props.produto.vlrAtual}</p>
                                        <p className="situacaoLances" >{this.props.produto.lanceMinimo}</p>
                                        <p className="situacaoLances" >{new Date(this.props.produto.startDate).toLocaleString('pt-BR')}</p>
                                        <p className="situacaoLances" >{new Date(this.props.produto.finalDate).toLocaleString('pt-BR')}</p>
                                        <p className="situacaoLances" >São Paulo, SP</p>
                                        </TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn >
                                            <TextField
                                              id="text-field-default"
                                              style={{width: '100px'}}
                                              value={"R$ " + vlrLance}
                                            />
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <RaisedButton 
                                                icon={<img alt="imagem não encontrada"  
                                                src={require('./handsup.png')} />} 
                                                backgroundColor='#872429' 
                                                onClick={() => this.handsUp(vlrLance)}
                                                disabled={new Date(this.props.produto.finalDate).getTime() <= new Date().getTime()}
                                            />
                                        </TableRowColumn>
                                    </TableRow>
                            </TableRowColumn>

                        </TableRow>
                    </TableBody>
                </Table>
            </div>
    );
  }
}

export default ProdutoDesc;

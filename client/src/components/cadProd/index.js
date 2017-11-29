import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class CadProd extends Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    const myState = this.state;
    if (stepIndex < 2) {
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
      return;
    }
    const formData = new FormData();
    formData.append('image', myState.img);
    fetch('http://localhost:8080/produtos/images', {
      method: 'POST',
      body: formData
    }).then(res => {if (res) return res.text();})
    .then(fileName => {
      fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: myState.nome,
          carac: myState.carac,
          img: fileName,
          desc: myState.desc,
          vlrInicial: myState.vlrInicial,
          lanceMinimo: myState.lanceMinimo,
          startDate: myState.startDate.toDateString() + " " + myState.startTime.toTimeString(),
          finalDate: myState.finalDate.toDateString() + " " + myState.finalTime.toTimeString(),
          status: 'criado'
        })
      })
      .then(console.log('ok'))
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div style={{display: 'flex'}}>
            <div>
              <TextField
                hintText="Nome do produto"
                defaultValue={this.state.nome}
                onChange={(evt, value) => this.setState({nome: value})}
              /><br/>
              <TextField
                hintText="Características principais"
                defaultValue={this.state.carac}
                onChange={(evt, value) => this.setState({carac: value})}
              /> 
            </div>
            <div style={{marginLeft: '25px'}}>
              <img style={{width: '100px', height: '100px'}} ref="show" alt="test"/>
              <input type="file" label="Choose file" accept="image/*" ref="img" onChange={() => {
                if(this.refs.img.files.length > 0) {
                  this.refs.show.src = URL.createObjectURL(this.refs.img.files[0])
                  this.setState({img: this.refs.img.files[0]});
                }
              }}/>
              <TextField
                hintText="Descrição"
                defaultValue={this.state.desc}
                multiLine={true}
                rows={4}
                rowsMax={4}
                onChange={(evt, value) => this.setState({desc: value})}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <TextField
              hintText="Lance inicial"
              defaultValue={this.state.vlrInicial}
              onChange={(evt, value) => this.setState({vlrInicial: value})}
            /><br/>
            <TextField
              hintText="Lance mínimo"
              defaultValue={this.state.lanceMinimo}
              onChange={(evt, value) => this.setState({lanceMinimo: value})}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <div style={{display: 'flex'}}>
              <DatePicker
                hintText="Ativar em:" 
                mode="landscape"
                onChange={(obj, date) => this.setState({startDate: date})}
                defaultDate={this.state.startDate}
              />
              <TimePicker
                hintText="Hrs:"
                format="24hr"
                autoOk={true}
                defaultTime={this.state.startTime}
                onChange={(obj,time) => this.setState({startTime: time})}
              />
            </div>
            <div style={{display: 'flex'}}>
              <DatePicker 
                hintText="Encerrar em:" 
                mode="landscape"
                onChange={(obj, date) => this.setState({finalDate: date})}
                defaultDate={this.state.finalDate}
              /><TimePicker
                hintText="Hrs:"
                format="24hr"
                autoOk={true}
                defaultTime={this.state.finalTime}
                onChange={(obj,time) => this.setState({finalTime: time})}
              />
            </div>
          </div>
        );
      default:
        return 'your princess is in another castle!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto', marginTop: '64px'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Características do produto</StepLabel>
          </Step>
          <Step>
            <StepLabel>Valores iniciais</StepLabel>
          </Step>
          <Step>
            <StepLabel>Data de início e término</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>Produto Cadastrado!</p>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CadProd;
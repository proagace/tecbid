import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },

};

class EditProfile extends Component {



  render(){
    return(
      <div style={{marginTop: '70px', marginLeft: '5%'}}>
        <h3>Editar Perfil</h3>
          <Paper style={styles.paper} circle={true}>
            <img style={{"width": "50%"}}  src={require('../images/user.png')} alt="error" />
          </Paper>
      </div>
    );
  }
}

export default EditProfile;
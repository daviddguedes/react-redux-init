import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doSignup } from './../actions/ActionsAuth';

class Cadastrar extends Component {

   render() {
      return (
         <div>
            <p>Cadastrar</p>
            <p>Username: {this.props.username}</p>
            <p>Email: {this.props.email}</p>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return ({
      username: state.AuthReducer.username,
      email: state.AuthReducer.email
   })
}

export default connect(mapStateToProps, { doSignup })(Cadastrar)
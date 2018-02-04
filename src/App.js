import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Nav from './components/Nav';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';

import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Nav />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Route exact path="/" component={Cadastrar} />
                <Route path="/cadastrar" component={Cadastrar} />
                <Route path="/login" component={Login} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

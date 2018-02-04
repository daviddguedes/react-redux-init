import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-md-12">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link className="navbar-brand" to="/">Navbar</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/cadastrar">Cadastrar <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/login">Login</Link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      )
   }
}

export default Nav;
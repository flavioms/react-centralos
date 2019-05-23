import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.sair = this.sair.bind(this);
    this.state = {
      auth: true
    }
  }

  sair(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (!localStorage.getItem('auth-token')) {
      return (<Redirect to='/login'></Redirect>)
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Ormec Engenharia</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to='/home' className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to='/chamadosAbrir' className="nav-link">Abrir Chamados</Link></li>
              <li className="nav-item"><Link to='/chamadosAtender' className="nav-link">Atender Chamados</Link></li>
              {console.log(this.props.admin)}
              {!!(this.props.admin) &&
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Avançados
                  </a>
                  <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <Link to='/usuarios' className="nav-link">Usuários</Link>
                    <Link to='/modulos' className="nav-link">Módulos</Link>
                    <Link to='/categorias' className="nav-link">Categorias</Link>
                  </div>
                </li>
              }
              <li className="nav-item">
                <button onClick={this.sair} className="btn btn-primary" type="button">Sair</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className='w-100'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.auth.admin
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Ormec Engenharia</a>
 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to='/chamadosSetor' className="nav-link">Chamados Do Setor</Link></li>
                <li className="nav-item"><Link to='/chamadosAtender' className="nav-link">Chamados Para Atender</Link></li>
                <li className="nav-item"><Link to='/usuarios' className="nav-link">Usuários</Link></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Avançados
                  </a>
                  <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <Link to='/modulos' className="nav-link">Módulos</Link>
                    <Link to='/categorias' className="nav-link">Categorias</Link>
                  </div>
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

export default App;

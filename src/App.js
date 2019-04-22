import React, { Component } from 'react';
import Home from './components/pages/Home';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className='menu-side'>
            <h1 className='title'>ORMEC ENGENHARIA</h1>
            <ul className='list'>
              <li><Link className='item' to='/'>Inicio</Link></li>
              <li><Link className='item' to='/usuarios'>Usuários</Link></li>
              <li><Link className='item' to='/chamados'>Chamados</Link></li>
              <hr></hr>
              <div className='submenu'>
                <input type='checkbox' id='avancado' name='avancado' value='avancado'/>
                <label for='avancado'></label>
                <ul className='submenu-itens'>
                  <li><Link className='item' to='/categorias'>Categorias</Link></li>
                  <li><Link className='item' to='/modulos'>Módulos</Link></li>
                </ul>
              </div>
            </ul>
          </div> 
          <div className='main-content'>
              {this.props.children}
          </div>
        </div>
      )
  }
}

export default App;

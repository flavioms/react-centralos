import React, { Component } from 'react';
import Home from './components/pages/Home';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className='menu-side'>
            <ul className='list'>
              <li><Link className='item' to='/'>Inicio</Link></li>
              <li><Link className='item' to='/usuarios'>Usuários</Link></li>
              <li><Link className='item' to='/chamados'>Chamados</Link></li>
            </ul>
          </div>
          <div className='main-content'>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      )
  }
}

export default App;

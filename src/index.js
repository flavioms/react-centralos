import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from './App';
import Login from './components/pages/usuarios/Login';
import Home from './components/pages/Home';
import Cadastro from './components/pages/usuarios/Cadastro';
import Chamados from './components/pages/chamados/Chamados';
import Usuarios from './components/pages/usuarios/Usuarios';
import * as serviceWorker from './serviceWorker';

import './css/Reset.css';
import './css/Login.css';
import './css/Cadastro.css';
import './css/App.css';
import './css/Menu.css';
import './css/Table.css';

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro}/>
      <App>
        <Route path='/' exact={true} component={Home} />
        <Route path='/chamados' component={Chamados}/>
        <Route path='/usuarios' component={Usuarios}/>
        <Route path='/categorias' component={Chamados}/>
        <Route path='/modulos' component={Chamados}/>
      </App>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

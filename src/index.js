import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from './App';
import Login from './components/pages/usuarios/Login';
import Home from './components/pages/Home';
import Cadastro from './components/pages/usuarios/Cadastro';
import ChamadosSetor from './components/pages/chamados/ChamadosSetor';
import ChamadosAtender from './components/pages/chamados/ChamadosAtender';
import Usuarios from './components/pages/usuarios/Usuarios';
import Modulos from './components/pages/modulos/Modulos';
import Categorias from './components/pages/categorias/Categorias';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro}/>
      <App>
        <Route path='/' exact={true} component={Home} />
        <Route path='/chamadosSetor' component={ChamadosSetor}/>
        <Route path='/chamadosAtender' component={ChamadosAtender}/>
        <Route path='/usuarios' component={Usuarios}/>
        <Route path='/categorias' component={Categorias}/>
        <Route path='/modulos' component={Modulos}/>
      </App>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
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
import PrivateRoute from './components/shared/PrivateRoute';
import store from './store/store';


ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path='/' exact={true} component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro}/>
      <App>
        <Provider store={store}>
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/chamadosSetor' component={ChamadosSetor}/>
          <PrivateRoute path='/chamadosAtender' component={ChamadosAtender}/>
          <PrivateRoute path='/usuarios' component={Usuarios}/>
          <PrivateRoute path='/categorias' component={Categorias}/>
          <PrivateRoute path='/modulos' component={Modulos}/>
        </Provider>
      </App>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

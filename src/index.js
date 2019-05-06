import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './containers/App';
import Login from './containers/usuarios/Login';
import Home from './containers/Home';
import Cadastro from './containers/usuarios/Cadastro';
import ChamadosSetor from './containers/chamados/ChamadosSetor';
import ChamadosAtender from './containers/chamados/ChamadosAtender';
import Usuarios from './containers/usuarios/Usuarios';
import Modulos from './containers/modulos/Modulos';
import Categorias from './containers/categorias/Categorias';
import PrivateRoute from './components/PrivateRoute';

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

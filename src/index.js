import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import store from './store';
import history from './routes/history';
import App from './containers/App';
import Login from './containers/usuarios/Login';
import Home from './containers/Home';
import Cadastro from './containers/usuarios/Cadastro';
import ChamadosAbrir from './containers/chamados/ChamadosAbrir';
import ChamadosAtender from './containers/chamados/ChamadosAtender';
import Usuarios from './containers/usuarios/Usuarios';
import Modulos from './containers/modulos/Modulos';
import Categorias from './containers/categorias/Categorias';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.render(
  <ConnectedRouter history={history}>
    <Switch>
      <Route path='/' exact={true} component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro}/>
      <App>
          <Provider store={store}>
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/chamadosAbrir' component={ChamadosAbrir}/>
            <PrivateRoute path='/chamadosAtender' component={ChamadosAtender}/>
            <PrivateRoute path='/usuarios' component={Usuarios}/>
            <PrivateRoute path='/categorias' component={Categorias}/>
            <PrivateRoute path='/modulos' component={Modulos}/>
          </Provider>
      </App>
    </Switch>
  </ConnectedRouter>, 
  document.getElementById('root')
);

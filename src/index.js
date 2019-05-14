import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './store';
import history from './routes/history';
import App from './containers/App';
import Login from './containers/auth/Login';
import Home from './containers/Home';
import Cadastro from './containers/usuarios/Cadastro';
import ChamadosAbrir from './containers/chamados/ChamadosAbrir';
import ChamadosInteracao from './containers/chamados/ChamadosInteracao';
import ChamadosAtender from './containers/chamados/ChamadosAtender';
import Usuarios from './containers/usuarios/Usuarios';
import Modulos from './containers/modulos/Modulos';
import Categorias from './containers/categorias/Categorias';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        <App>
          <PrivateRoute name='home' path='/home' component={Home} />
          <PrivateRoute name='chamadosAbrir' path='/chamadosAbrir' component={ChamadosAbrir} />
          <PrivateRoute name='chamadosAtender' path='/chamadosAtender' component={ChamadosAtender} />
          <PrivateRoute name='chamado' exact path='/chamado/:id' component={ChamadosInteracao} />
          <PrivateRoute name='usuarios' path='/usuarios' component={Usuarios} />
          <PrivateRoute name='categorias' path='/categorias' component={Categorias} />
          <PrivateRoute name='modulos' path='/modulos' component={Modulos} />
        </App>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

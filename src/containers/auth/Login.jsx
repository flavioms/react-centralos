import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/auth';
import { push } from 'connected-react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      auth: false,
      msg: '',
      usuario: {
        email: '',
        senha: ''
      }
    }
  }

  handleInputChange(e) {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({ usuario })
  }

  componentWillMount(){
    if(localStorage.getItem('auth-token')){
      this.props.redirect()
    }
  }

  async login(e) {
    e.preventDefault();
    await this.props.login(this.state.usuario)
  }
  render() {
    return (
      <section className='text-center'>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.result.message}</div>}
        <form className="form-signin" onSubmit={this.login}>
          <h1 className="h3 mb-3 font-weight-normal">Entrar no sistema</h1>
          <label htmlFor="email" className="sr-only">E-mail</label>
          <input type="email" className="form-control" placeholder="Endereço de e-mail" name="email" id="email" value={this.state.usuario.email} onChange={this.handleInputChange} required autoFocus />
          <label htmlFor="senha" className="sr-only">Senha</label>
          <input type="password" className="form-control" placeholder="Senha" name="senha" id="senha" value={this.state.usuario.senha} onChange={this.handleInputChange} required />
          <button className="btn btn-primary" type="submit">Entrar</button>
          <Link className="btn btn-primary ml-4" to='/cadastro' role="button">Cadastrar</Link>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
  success: state.auth.success
})

const mapDispatchToProps = dispatch => ({
  login: usuario => dispatch(action.login(usuario)),
  redirect: () => dispatch(push(`/home`))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
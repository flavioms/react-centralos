import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default class Login extends Component {
  constructor(props){
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
    this.setState({usuario})
  }

  login(e) {
    e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(this.state.usuario)
    }).then(response => {
      return response.json()
    }).then(result => {
      if(result.error){
        throw new Error(result.message)
      }
      localStorage.setItem('auth-token',result.token);
      localStorage.setItem('user-info', JSON.stringify(jwtDecode(result.token)))
      this.setState({auth: true})
    }).catch(error => {
      this.setState({msg: error.message})
    })
  }
  render() {
    if(this.state.auth || localStorage.getItem('auth-token')){
      return(<Redirect to='/home'></Redirect>)
    }
    return(
      <section className='text-center'>
        {!!this.state.msg && <div className="alert alert-danger" role="alert">{this.state.msg}</div>}
        <form className="form-signin" onSubmit={this.login}>
          <h1 className="h3 mb-3 font-weight-normal">Entrar no sistema</h1>
          <label for="email" className="sr-only">E-mail</label>
          <input type="email" className="form-control" placeholder="Endereço de e-mail" name="email" id="email"  value={this.state.usuario.email} onChange={this.handleInputChange} required autofocus/>
          <label for="senha" className="sr-only">Senha</label>
          <input type="password" className="form-control" placeholder="Senha" name="senha" id="senha" value={this.state.usuario.senha} onChange={this.handleInputChange} required/>
          <button className="btn btn-primary" type="submit">Entrar</button>
          <Link className="btn btn-primary ml-4" to='/cadastro' role="button">Cadastrar</Link>
        </form>
      </section>
    )
  }
}
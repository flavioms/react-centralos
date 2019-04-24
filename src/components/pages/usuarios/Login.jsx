import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      token: '',
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
    }).then(token => {
      localStorage.setItem('auth-token',token.token);
      this.setState({token})
    })
  }

  render() {
    if(this.state.token || localStorage.getItem('auth-token')){
      return(<Redirect to='/'></Redirect>)
    }
    return(
      <section className='text-center'>
        <form class="form-signin" onSubmit={this.login}>
          <h1 class="h3 mb-3 font-weight-normal">Entrar no sistema</h1>
          <label for="email" class="sr-only">E-mail</label>
          <input type="email" class="form-control" placeholder="Endereço de e-mail" name="email" id="email"  value={this.state.usuario.email} onChange={this.handleInputChange} required autofocus/>
          <label for="senha" class="sr-only">Senha</label>
          <input type="password" class="form-control" placeholder="Senha" name="senha" id="senha" value={this.state.usuario.senha} onChange={this.handleInputChange} required/>
          <button class="btn btn-primary" type="submit">Entrar</button>
          <button class="btn btn-secondary ml-4" type="submit">Cadastrar</button>
        </form>
      </section>
    )
  }
}
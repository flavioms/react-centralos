import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return(
      <section>
        <form action="" className='form-login'>
          <span className='error'>Não foi possivel logar</span>
          <div className='input'>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email"  ref={(input) => this.email = input}/>
          </div>
          <div className='input'>
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" ref={(input) => this.senha = input}/>
          </div>
          <input className='submit' type="submit" name="entrar" id="entrar" value="Entrar" />
          <Link to='/cadastro' className='link'>Cadastrar</Link>
        </form>
      </section>
    )
  }
}
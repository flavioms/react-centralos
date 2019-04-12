import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Cadastro extends Component{
  render() {
    return(
      <section>
        <form action="#" className='form-cadastro'>
          <h1 className='title'>Crie seu usuário para ter acesso ao sistema!</h1>
          <div className='input'>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" maxlength="100" />
            <span></span>
          </div>
          <div className='input'>
            <label for="ccusto">Centro de Custo</label>
            <input type="text" name="ccusto" id="ccusto" maxlength="100" />
            <span></span>
          </div>
          <div className='select'>
            <label for="filial">Filial</label>
            <select name="filial" id="filial">
              <option value="01">MVR - Volta Redonda</option>
              <option value="23">FRJ - Rio de Janeiro</option>
              <option value="21">FPA - Porto do Açu</option>
              <option value="12">FMG - Minas Gerais</option>
              <option value="13">FCB - Cubatão</option>
              <option value="20">FSE - Serra</option>
              <option value="22">FVC - Vale dos Carajas</option>
              <option value="24">FBA - Bahia</option>
            </select>
          </div>
          <div className='input'>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <span></span>
          </div>
          <div className='input'>
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" maxlength="100" />
            <span></span>
          </div>
          <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
          <Link className='link' to='/login'>Voltar</Link>
        </form>
      </section>
    )
  }
}
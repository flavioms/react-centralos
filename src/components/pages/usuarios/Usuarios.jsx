import React, { Component } from 'react';

export default class Usuarios extends Component{
  render() {
    return(
      <section>
        <h1>Controle de Usuários</h1>
        <form action="#">
          <div>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" maxlength="100"/>
            <span></span>
          </div>
          <div>
            <label for="ccusto">Centro de Custo</label>
            <input type="text" name="ccusto" id="ccusto" maxlength="100"/>
            <span></span>
          </div>
          <div>
            <label for="filial">Filial</label>
            <input type="text" name="filial" id="filial"/>
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
          <div>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email"/>
            <span></span>
          </div>
          <div>
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha"/>
            <span></span>
          </div>
          <div>
            <label for="suporte">Suporte</label>
            <input type="radio" name="suporte" id="suporte" value='1'/>Sim
            <input type="radio" name="suporte" id="suporte" value='0'/>Não
          </div>
          <input type="submit" name="cadastrar" id="cadastrar" value="Cadastrar"/>
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>C. Custo</th>
              <th>Filial</th>
              <th>Suporte</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Flávio Martins</td>
              <td>flavio.martins@ormec.com.br</td>
              <td>01000IN</td>
              <td>01</td>
              <td>Sim</td>
              <td>Editar | Excluir</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}
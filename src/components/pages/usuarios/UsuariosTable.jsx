import React, { Component } from 'react';

export default class UsuariosTable extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <table className='form-table'>
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
    )
  }
}
import React, { Component } from 'react';

export default class ModulosTable extends Component {
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
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SIGAGPE</td>
              <td>Editar | Excluir</td>
            </tr>
          </tbody>
        </table>
    )
  }
}
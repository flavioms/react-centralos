import React, { Component } from 'react';

export default class ChamadosTable extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <table className='table table-striped mt-5'>
          <thead className='thead-dark'>
            <tr>
              <th>Data Emissão</th>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Módulo</th>
              <th>Totvs</th>
              <th>Usuario</th>
              <th>Suporte</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07/04/2019 15:30</td>
              <td>Erro Log na solcitação de compras</td>
              <td>Protheus</td>
              <td>SIGACOM</td>
              <td></td>
              <td>marcelo.silva</td>
              <td>flavio.martins</td>
              <td>Abrir | Editar | Finalizar | Excluir</td>
            </tr>
          </tbody>
        </table>
    )
  }
}
import React, { Component } from 'react';

export default class UsuariosTable extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <table className='table table-striped mt-5'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>C. Custo</th>
              <th>Setor</th>
              <th>Filial</th>
              <th>Administrador</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usuarios.map((usuario, index) => {
              return(
                <tr key={usuario._id}>
                  <td>{index}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.ccusto}</td>
                  <td>{usuario.setor}</td>
                  <td>{usuario.filial}</td>
                  <td>{usuario.admin ? 'Sim' : 'Não'}</td>
                  <td>
                    <button className='btn btn-link' id='alterar' name='alterar' onClick={() => this.props.handleAlterar(usuario)}>Alterar</button> 
                    <button className='btn btn-link' id='excluir' name='excluir' onClick={() => this.props.handleExcluir(usuario)}>Excluir</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    )
  }
}
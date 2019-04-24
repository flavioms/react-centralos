import React from 'react';

const CategoriasTable = props => {
  return(
    <table className='table table-striped mt-5'>
      <thead className='thead-dark'>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.categorias.map(categoria => {
          return(
            <tr>
              <td>{categoria.id}</td>
              <td>{categoria.nome}</td>
              <td>Editar | Excluir</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CategoriasTable;
import React from 'react';

const CategoriasTable = props => {
  return (
    <table className='table table-striped mt-5'>
      <thead className='thead-dark'>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Sla</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.categorias.map((categoria, index) => (
          <tr key={categoria._id}>
            <td>{index}</td>
            <td>{categoria.nome}</td>
            <td>{categoria.sla}</td>
            <td className='text-nowrap'>
              <button className='btn btn-link' id='alterar' name='alterar' onClick={() => props.handleChange(categoria)}>Alterar</button>
              <button className='btn btn-link' id='excluir' name='excluir' onClick={() => props.handleDelete(categoria)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CategoriasTable;
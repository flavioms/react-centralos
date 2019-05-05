import React from 'react'

const ModulosTable = (props) => {
  return (
    <table className='table table-striped mt-5'>
      <thead className='thead-dark'>
        <tr>
          <th>Id</th>
          <th>Sigla</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.modulos.map((modulo, index) => (
          <tr>
            <td>{index}</td>
            <td>{modulo.sigla}</td>
            <td>{modulo.nome}</td>
            <td className='text-nowrap'>
              <button className='btn btn-link' id='alterar' name='alterar' onClick={() => props.handleChange(modulo)}>Alterar</button>
              <button className='btn btn-link' id='excluir' name='excluir' onClick={() => props.handleDelete(modulo)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ModulosTable
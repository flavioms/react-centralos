import React from 'react'

const UsuariosTable = (props) => {
  return (
    <table className='table table-striped mt-5'>
      <thead className='thead-dark'>
        <tr>
          <th className='text-nowrap'>Id</th>
          <th className='text-nowrap'>Nome</th>
          <th className='text-nowrap'>E-mail</th>
          <th className='text-nowrap'>C. Custo</th>
          <th className='text-nowrap'>Setor</th>
          <th className='text-nowrap'>Filial</th>
          <th className='text-nowrap'>Administrador</th>
          <th className='text-nowrap'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.usuarios.data.map((usuario, index) => {
          return (
            <tr key={usuario._id}>
              <td className='text-nowrap'>{index}</td>
              <td className='text-nowrap'>{usuario.nome}</td>
              <td className='text-nowrap'>{usuario.email}</td>
              <td className='text-nowrap'>{usuario.ccusto}</td>
              <td className='text-nowrap'>{usuario.setor}</td>
              <td className='text-nowrap'>{usuario.filial}</td>
              <td className='text-nowrap'>{usuario.admin ? 'Sim' : 'Não'}</td>
              <td className='text-nowrap'>
                <button className='btn btn-link' id='alterar' name='alterar' onClick={() => props.handleChange(usuario)}>Alterar</button>
                <button className='btn btn-link' id='excluir' name='excluir' onClick={() => props.handleDelete(usuario)}>Excluir</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsuariosTable

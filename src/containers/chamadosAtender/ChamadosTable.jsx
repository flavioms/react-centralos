import React from 'react'

const ChamadosTable = (props) => {
  return (
    <table className='table table-striped mt-5'>
        <thead className='thead-dark'>
          <tr>
            <th>Data Emissão</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Módulo</th>
            <th>Usuario</th>
            <th>Suporte</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.chamados.map(chamado => {
            return (
              <tr key={chamado._id}>
                <td className='text-nowrap'>{chamado.dtAbertura}</td>
                <td>{chamado.titulo}</td>
                <td className='text-nowrap'>{chamado.categoria}</td>
                <td className='text-nowrap'>{chamado.modulo}</td>
                <td className='text-nowrap'>{chamado.usuario.nome}</td>
                <td className='text-nowrap'>{chamado.suporte}</td>
                <td className='text-nowrap'>
                  <button className='btn btn-link' id='abrir' name='abrir' onClick={() => props.handleOpen(chamado._id)}>Abrir</button>
                  <button className='btn btn-link' id='finalizar' name='finalizar' onClick={() => props.handleFinish(chamado)}>Finalizar</button>
                  <button className='btn btn-link' id='excluir' name='excluir' onClick={() => props.handleDelete(chamado)}>Excluir</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
  )
}

export default ChamadosTable

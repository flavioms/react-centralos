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
            <th>Totvs</th>
            <th>Usuario</th>
            <th>Suporte</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.chamados.map(chamado => {
            return (
              <tr>
                <td>{chamado.dtAbertura}</td>
                <td>{chamado.titulo}</td>
                <td>{chamado.categoria}</td>
                <td>{chamado.modulo}</td>
                <td>{chamado.totvs}</td>
                <td>{chamado.usuario.nome}</td>
                <td>{chamado.suporte}</td>
                <td>Abrir | Editar | Finalizar | Excluir</td>
              </tr>
            )
          })}

        </tbody>
      </table>
  )
}

export default ChamadosTable

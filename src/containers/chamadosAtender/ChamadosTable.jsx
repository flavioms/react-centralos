import React from 'react'
import convertDate from "../../config/moment";

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
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.chamados.map(chamado => {
          return (
            <tr key={chamado._id}>
              <td className='text-nowrap'>{convertDate(chamado.dtAbertura)}</td>
              <td>{chamado.titulo}</td>
              <td className='text-nowrap'>{chamado.categoria}</td>
              <td className='text-nowrap'>{chamado.modulo}</td>
              <td className='text-nowrap'>{chamado.usuario.nome}</td>
              <td className='text-nowrap'>{chamado.suporte}</td>
              <td className='text-nowrap'>{chamado.status}</td>
              <td className='text-nowrap'>
                {!!chamado.suporte &&
                  <button className='btn btn-link' id='interagir' name='interagir' onClick={() => props.handleOpen(chamado._id)}>Interagir</button>
                }
                {!!!chamado.suporte &&
                  <button className='btn btn-link' id='atender' name='atender' onClick={() => props.handleAnswer(chamado)}>Atender</button>
                }
                {!!(chamado.status !== 'Encerrado') &&
                  <button className='btn btn-link' id='finalizar' name='finalizar' onClick={() => props.handleFinish(chamado)}>Finalizar</button>
                }
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

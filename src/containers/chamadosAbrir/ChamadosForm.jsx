import React from 'react'
import { SETORES } from '../../constants/list.conf'

const ChamadosForm = (props) => {
  const chamado = props.chamado;
  return (
    <form className='mt-4' onSubmit={props.handleSubmit}>
      <div className='form-group'>
        <input className='form-control' name='titulo' placeholder='Titulo' type='text' value={chamado.titulo} onChange={props.handleInputChange} />
      </div>
      <div className='form-group'>
        <select className='form-control' id='categoria' name='categoria' value={chamado.categoria} onChange={props.handleInputChange} >
          <option value='' disabled defaultValue>Escolha a categoria do chamado!</option>
          {props.categorias.map((categoria, index) => (
            <option key={index} value={categoria.nome}>{categoria.nome}</option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <select className='form-control' id='setor' name='setor' value={chamado.setor} onChange={props.handleInputChange} >
          <option value='' disabled defaultValue>Escolha o setor que irá te atender!</option>
          {SETORES.map((setor, index) => (
            <option key={index} value={setor.nome}>{setor.nome}</option>
          ))}
        </select>
      </div>

      {chamado.categoria.toLowerCase() === 'protheus' && (
        <div>
          <div className='form-group'>
            <select className='form-control' name='modulo' value={chamado.modulo} onChange={props.handleInputChange} >
              <option value='' disabled defaultValue >Escolha o módulo do sistema!</option>
              {props.modulos.map((modulo, index) => (
                <option key={index} value={modulo.sigla}>{modulo.nome}</option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <input className='form-control' name='totvs' placeholder='Ticket da Totvs' type='text' value={chamado.totvs} onChange={props.handleInputChange} />
          </div>
        </div>
      )}

      <div className='form-group'>
        <textarea rows='3' className='form-control' name='problema' placeholder='Descrição inicial do problema' value={chamado.problema} onChange={props.handleInputChange} />
      </div>

      <div className='form-group'>
        <label htmlFor="anexo">Adicionar anexos no chamado</label>
        <input className='form-control-file' multiple accept='.txt,.doc,.docx,.png,.jpeg,.rar,.zip' name='anexo' id='anexo' placeholder='Anexo' type='file' />
      </div>


      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  )
}

export default ChamadosForm


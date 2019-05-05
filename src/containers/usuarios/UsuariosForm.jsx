import React from 'react'
import ListConf from '../../constants/ListConf';

const UsuariosForm = (props) => {
  const usuario = props.usuario;
  return (
    <div>
      <form className='mt-4' onSubmit={props.handleSubmit}>
        <div className='form-group'>
          <input className='form-control' name='nome' placeholder='Nome' type='text' value={usuario.nome} onChange={props.handleInputChange} />
        </div>
        <div className='form-group'>
          <input className='form-control' name='ccusto' placeholder='Centro de Custo' type='text' value={usuario.ccusto} onChange={props.handleInputChange} />
        </div>
        <div className='form-group'>
          <select className='form-control' name='setor' value={usuario.setor} onChange={props.handleInputChange}>
            <option value='' disabled defaultValue>Escolha seu Setor!</option>
            {ListConf.SETORES.map((setor, index) => (
              <option key={index} value={setor.nome}>{setor.nome}</option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <select className='form-control' name='filial' value={usuario.filial} onChange={props.handleInputChange}>
            <option value='' disabled defaultValue>Escolha sua Filial!</option>
            {ListConf.FILIAIS.map(filial => (
              <option key={filial.codigo} value={filial.codigo}>{filial.nome}</option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <input className='form-control' name='email' placeholder='E-mail' type='email' value={usuario.email} onChange={props.handleInputChange} />
        </div>
        <div className='form-group'>
          <input className='form-control' disabled={usuario._id} name='senha' placeholder='Senha' type='password' value={usuario.senha} onChange={props.handleInputChange} />
        </div>
        <div className='form-group'>
          <input className='form-control' disabled={usuario._id} name='confsenha' placeholder='Confirmação de Senha' type='password' value={usuario.confsenha} onChange={props.handleInputChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="admin">O usuário é administrador?</label>
          <div className="custom-control custom-radio custom-control-inline ml-3">
            <input type="radio" id="admin1" name="admin" value="true" className="custom-control-input" checked={usuario.admin === true} onChange={props.handleInputChange} />
            <label className="custom-control-label" htmlFor="admin1">Sim</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="admin2" name="admin" value="false" className="custom-control-input" checked={usuario.admin === false} onChange={props.handleInputChange} />
            <label className="custom-control-label" htmlFor="admin2">Não</label>
          </div>
        </div>
        <button className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar">Cadastrar</button>
        <button className='btn btn-primary ml-4' type="button" name="limpar" id="limpar" onClick={props.handleClear}>Limpar</button>
      </form>
    </div>
  )
}

export default UsuariosForm

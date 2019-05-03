import React from 'react'

const ModulosForm = (props) => {
  return (
    <form className='mt-4' onSubmit={props.handleSubmit}>
      <div className='form-group'>
        <input className='form-control' name='sigla' placeholder='Sigla' type='text' value={props.modulo.sigla} onChange={props.handleInputChange} />
      </div>
      <div className='form-group'>
        <input className='form-control' name='nome' placeholder='Nome' type='text' value={props.modulo.nome} onChange={props.handleInputChange} />
      </div>
      <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      <button className='btn btn-primary ml-4' type='button' id='limpar' name='limpar' onClick={props.handleClear}>Limpar</button>
    </form>
  )
}

export default ModulosForm

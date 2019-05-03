import React from 'react';

const CategoriasForm = props => {
    return(
      <form className='mt-4' onSubmit={props.handleSubmit}>
        <div className='form-group'>
          <input  className='form-control' name='nome' placeholder='Nome' type='text' value={props.categoria.nome} onChange={props.handleInputChange}/>
        </div>
        <div className='form-group'>
          <label htmlfor='sla'>SLA - <small>Em horas</small>:</label>
          <input  className='form-control' name='sla' id='sla' type='time' value={props.categoria.sla} onChange={props.handleInputChange}/>
        </div>
        <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      <button className='btn btn-primary ml-4' type='button' id='limpar' name='limpar' onClick={props.handleClear}>Limpar</button>
      </form>
    )
}

export default CategoriasForm;
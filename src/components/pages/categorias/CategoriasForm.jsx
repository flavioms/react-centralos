import React from 'react';

const CategoriasForm = props => {
    return(
      <form className='mt-4' onSubmit={props.submitFunction}>
        <div className='form-group'>
          <input  className='form-control' name='nome' placeholder='Nome' type='text' value={props.categoria.nome} onChange={props.handleInputChange}/>
        </div>
        <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      </form>
    )
}

export default CategoriasForm;
import React from 'react';

const CategoriasForm = props => {
    return(
      <form className='form-cadastro' onSubmit={props.submitFunction}>
        <div className='form-input'>
          <input  className='field' name='nome' placeholder='Nome' type='text' value={props.categoria.nome} onChange={props.handleInputChange}/>
        </div>
        <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      </form>
    )
}

export default CategoriasForm;
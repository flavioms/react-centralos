import React, { Component } from 'react';

export default class CategoriasForm extends Component{
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      categoria: {
        nome: ''
      }
    }
  }
  
  handleInputChange(e) {
    let categoria = Object.assign({}, this.state.categoria);
    categoria[e.target.name] = e.target.value;
    this.setState({categoria})
  }

  render(){
    return(
      <form className='form-cadastro'>
        <div className='form-input'>
          <input  className='field' name='nome' placeholder='Nome' type='text' value={this.state.categoria.nome} onChange={this.handleInputChange}/>
        </div>
        <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      </form>
    )
  }
}
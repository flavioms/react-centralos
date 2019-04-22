import React, { Component } from 'react';

export default class ModulosForm extends Component{
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      modulo: {
        nome: ''
      }
    }
  }

  handleInputChange(e) {
    let modulo = Object.assign({}, this.state.modulo);
    modulo[e.target.name] = e.target.value;
    this.setState({modulo})
  }

  render(){
    return(
      <form className='form-cadastro'>
        <div className='form-input'>
          <input  className='field' name='nome' placeholder='Nome' type='text' value={this.state.modulo.nome} onChange={this.handleInputChange}/>
        </div>
        <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      </form>
    )
  }
}
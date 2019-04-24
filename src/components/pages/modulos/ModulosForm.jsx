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
      <form className='mt-4'>
        <div className='form-group'>
          <input  className='form-control' name='nome' placeholder='Nome' type='text' value={this.state.modulo.nome} onChange={this.handleInputChange}/>
        </div>
        <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
      </form>
    )
  }
}
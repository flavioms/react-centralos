import React, { Component } from 'react';
import FormChamado from './ChamadosForm';

export default class Chamados extends Component {
  constructor(){
    super()
  }

  cadastro(e){
    e.preventDefault();
  }
  
  render() {
    return(
      <section>
        <h1 className='main-title'>Abertura de Chamado</h1>
        
        <FormChamado handleSubmit={this.cadastro}  />
        
        
      </section>
    )
  }
}
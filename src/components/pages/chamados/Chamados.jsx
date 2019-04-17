import React, { Component } from 'react';
import ChamadosForm from './ChamadosForm';
import ChamadosTable from './ChamadosTable';

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
        
        <ChamadosForm handleSubmit={this.cadastro}  />
        <ChamadosTable></ChamadosTable>
        
        
      </section>
    )
  }
}
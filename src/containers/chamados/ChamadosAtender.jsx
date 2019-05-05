import React, { Component } from 'react';
import ChamadosTable from './ChamadosTable';

export default class ChamadosAtender extends Component {
  constructor(){
    super()
  }

  cadastro(e){
    e.preventDefault();
  }
  
  render() {
    return(
      <section>
        <h2 className='h2 mt-4'>Chamados para serem atendidos!</h2>
        <ChamadosTable></ChamadosTable>
      </section>
    )
  }
}
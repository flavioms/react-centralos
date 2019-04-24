import React, { Component } from 'react';
import UsuariosForm from './UsuariosForm';
import UsuariosTable from './UsuariosTable';
import ChamadosForm from '../chamados/ChamadosForm';
import ChamadosTable from '../chamados/ChamadosTable';

export default class Usuarios extends Component{
  constructor(){
    super()
  }

  cadastro(e){
    e.preventDefault();
  }
  
  render() {
    return(
      <section>
        <h2 className='h2 mt-4'>Controle de Usuários</h2>
        <UsuariosForm handleSubmit={this.cadastro}/>
        <UsuariosTable></UsuariosTable>
      </section>
    )
  }
}
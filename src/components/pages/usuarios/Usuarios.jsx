import React, { Component } from 'react';
import UsuariosForm from './UsuariosForm';
import UsuariosTable from './UsuariosTable';

export default class Usuarios extends Component{
  render() {
    return(
      <section>
        <h1 className='main-title'>Controle de Usuários</h1>
        <UsuariosForm />
        <hr></hr>
        <UsuariosTable />
      </section>
    )
  }
}
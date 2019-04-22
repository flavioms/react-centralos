import React, { Component } from 'react';
import CategoriasForm from './CategoriasForm';
import CategoriasTable from './CategoriasTable';

export default class Categorias extends Component {
  render(){
    return(
      <section>
        <h1 className='main-title'>Controle de Categorias</h1>
        <CategoriasForm/>
        <hr></hr>
        <CategoriasTable/>
      </section>
    )
  }
}
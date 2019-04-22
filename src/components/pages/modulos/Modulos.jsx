import React, { Component } from 'react';
import ModuloForm from './ModulosForm';
import ModuloTable from './ModulosTable';

export default class Modulos extends Component {
  render(){
    return(
      <section>
        <h1 className='main-title'>Controle de Módulos</h1>
        <ModuloForm/>
        <hr></hr>
        <ModuloTable/>
      </section>
    )
  }
}
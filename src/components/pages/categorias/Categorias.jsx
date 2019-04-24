import React, { Component } from 'react';
import CategoriasForm from './CategoriasForm';
import CategoriasTable from './CategoriasTable';

export default class Categorias extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      categorias: [{id: 1, nome: 'software'}, {id: 2, nome: 'hardware'}],
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

  Cadastrar(e){
    e.preventDefault()
    console.log("Cadastrou");
  }

  render(){
    return(
      <section>
        <h1 className='h2 mt-4'>Controle de Categorias</h1>
        <CategoriasForm categoria={this.state.categoria} handleInputChange={this.handleInputChange} submitFunction={this.Cadastrar}/>
        <CategoriasTable categorias={this.state.categorias}/>
      </section>
    )
  }
}
import React, { Component } from 'react';
import ChamadosForm from './ChamadosForm';
import ChamadosTable from './ChamadosTable';

export default class ChamadosSetor extends Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      chamado: {
        status: '',
        titulo: '',
        categoria: '',
        modulo: '',
        totvs: '',
        setor: '',
        usuario: {
          nome: '',
          setor: '',
          ccusto: ''
        },
        suporte: '',
        dtAbertura: '',
        dtEncerramento: '',
        timelapse: [],
        interacoes: []
      }
    }
  }

  handleInputChange(e) {
    let chamado = Object.assign({}, this.state.chamado);
    chamado[e.target.name] = e.target.value;
    this.setState({chamado})
  }

  cadastro(e){
    e.preventDefault();
  }
  
  render() {
    return(
      <section>
        <h2 className='h2 mt-4'>Chamados abertos pelo meu setor!</h2>
        <ChamadosForm handleSubmit={this.cadastro}  handleInputChange={this.handleInputChange} chamado={this.state.chamado}/>
        <ChamadosTable></ChamadosTable>
      </section>
    )
  }
}
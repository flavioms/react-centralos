import React, { Component } from 'react';

export default class ChamadosForm extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(
        <form className='mt-4' onSubmit={this.props.handleSubmit}>
          <div className='form-group'>
            <input  className='form-control' name='titulo' placeholder='Titulo' type='text' value={this.props.chamado.titulo} onChange={this.props.handleInputChange}/>
          </div>
          <div className='form-group'>
            <select  className='form-control' id='categoria' name='categoria' value={this.props.chamado.categoria} onChange={this.props.handleInputChange} >
              <option value='' disabled selected>Escolha a categoria do chamado!</option>
              <option value="hardware">Hardware</option>
              <option value="protheus">Protheus</option>
            </select>
          </div>
          <div className='form-group'>
            <select  className='form-control' id='setor' name='setor' value={this.props.chamado.setor} onChange={this.props.handleInputChange} >
              <option value='' disabled selected>Escolha o setor que irá te atender!</option>
              <option value="TI">TI</option>
              <option value="RH">RH</option>
            </select>
          </div>

          {this.props.chamado.categoria === 'protheus' && (
            <div>
              <div className='form-group'>
                <select  className='form-control' name='modulo' value={this.props.chamado.modulo} onChange={this.props.handleInputChange} >
                  <option value='' disabled selected >Escolha o módulo do sistema!</option>
                  <option value="SIGAGPE">Gestão de Pessoal</option>
                </select>
              </div>
              <div className='form-group'>
                <input  className='form-control' name='totvs' placeholder='Ticket da Totvs' type='text'  value={this.props.chamado.totvs} onChange={this.props.handleInputChange}/>
              </div>
            </div>
          )}

          
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    )
  }
}

import React, { Component } from 'react';

export default class ChamadosForm extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      chamado: {
        titulo: '',
        categoria: '',
        suporte: '',
        modulo: '',
        totvs: ''
      }
    }
  }

  handleInputChange(e) {
    let chamado = Object.assign({}, this.state.chamado);
    chamado[e.target.name] = e.target.value;
    this.setState({chamado})
  }
  
  render(){
    return(
        <form className='form-cadastro'>
          <div className='form-input'>
            <input  className='field' name='titulo' placeholder='Titulo' type='text' value={this.state.chamado.titulo} onChange={this.handleInputChange}/>
          </div>
          <div className='form-select'>
            <select  className='field' id='categoria' name='categoria' value={this.state.chamado.categoria} onChange={this.handleInputChange} >
              <option value='' disabled selected>Escolha a categoria do chamado!</option>
              <option value="hardware">Hardware</option>
              <option value="protheus">Protheus</option>
            </select>
          </div>
          <div className='form-select'>
            <select  className='field' id='suporte' name='suporte' value={this.state.chamado.suporte} onChange={this.handleInputChange} >
              <option value='' disabled selected>Escolha o suporte que irá te atender!</option>
            </select>
          </div>

          {this.state.chamado.categoria === 'protheus' && (
            <div>
              <div className='form-select'>
                <select  className='field' name='modulo' value={this.state.chamado.modulo} onChange={this.handleInputChange} >
                  <option value='' disabled selected >Escolha o módulo do sistema!</option>
                  <option value="SIGAGPE">Gestão de Pessoal</option>
                </select>
              </div>
              <div className='form-input'>
                <input  className='field' name='totvs' placeholder='Ticket da Totvs' type='text'  value={this.state.chamado.totvs} onChange={this.handleInputChange}/>
              </div>
            </div>
          )}

          
          <button type="submit" className='submit'>Submit</button>
        </form>
    )
  }
}

import React, { Component } from 'react';

export default class UsuariosForm extends Component{

  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      usuario: {
        nome: '',
        ccusto: '',
        setor: '',
        filial: '',
        email: '',
        senha: '',
        admin: ''
      }
    }
  }

  handleInputChange(e) {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({usuario})
  }

  render() {
    return(
          <form className='form-cadastro'>
            <div className='form-input'>
              <input  className='field' name='nome' placeholder='Nome' type='text' value={this.state.usuario.nome} onChange={this.handleInputChange}/>
            </div>
            <div className='form-input'>
              <input  className='field' name='ccusto' placeholder='Centro de Custo' type='text'value={this.state.usuario.ccusto} onChange={this.handleInputChange}/>
            </div>
            <div className='form-input'>
              <select  className='field' name='setor' value={this.state.usuario.setor} onChange={this.handleInputChange}>
                <option value='' disabled selected>Escolha seu Setor!</option>
                <option value="TI">TI</option>
                <option value="RH">RH</option>
                <option value="CONTABILIDADE">CONTABILIDADE</option>
                <option value="SUPRIMENTOS">SUPRIMENTOS</option>
                <option value="FINANCEIRO">FINANCEIRO</option>
                <option value="JURIDICO">JURÍDICO</option>
                <option value="FILIAL">FILIAL - ADM</option>
              </select>
            </div>
            <div className='form-select'>
              <select  className='field' name='filial' value={this.state.usuario.filial} onChange={this.handleInputChange}>
              <option value='' disabled selected>Escolha sua Filial!</option>
                <option value="01">MVR - Volta Redonda</option>
                <option value="23">FRJ - Rio de Janeiro</option>
                <option value="21">FPA - Porto do Açu</option>
                <option value="12">FMG - Minas Gerais</option>
                <option value="13">FCB - Cubatão</option>
                <option value="20">FSE - Serra</option>
                <option value="22">FVC - Vale dos Carajas</option>
                <option value="24">FBA - Bahia</option>
              </select>
            </div>
            <div className='form-input'>
              <input  className='field' name='email' placeholder='E-mail' type='email' value={this.state.usuario.email} onChange={this.handleInputChange}/>
            </div>
            <div className='form-input'>
              <input  className='field' name='senha' placeholder='Senha' type='password' value={this.state.usuario.senha} onChange={this.handleInputChange}/>
            </div>
            <div className='form-input'>
              <label htmlFor="admin">Administrador?</label>
              <input type="radio" name="admin" id="admin" value="true" checked={this.state.usuario.admin === "true"} onChange={this.handleInputChange}/>Sim
              <input type="radio" name="admin" id="admin" value="false" checked={this.state.usuario.admin === "false"} onChange={this.handleInputChange}/>Não
            </div>
            <input className='submit' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
          </form>
    )
  }
}
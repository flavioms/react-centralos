import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Cadastro extends Component{
  
  constructor(props){
    super(props);
    this.cadastrar = this.cadastrar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      redirect: false,
      usuario: {
        nome: '',
        ccusto: '',
        setor: '',
        filial: '',
        email: '',
        senha: ''
      }
    }
  }

  handleInputChange(e) {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({usuario})
  }

  cadastrar(e){
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(this.state.usuario)
    }).then(response => {
      return response.json()
    }).then(result => {
      this.setState({redirect: true})
    })
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to='/login'/>)
    }
    return(
      <section className='container'>
        <h2 className='h2'>Crie seu usuário para ter acesso ao sistema!</h2>
        <form className='mt-4' onSubmit={this.cadastrar}>
          <div className='form-group'>
            <input  className='form-control' name='nome' placeholder='Nome' type='text' value={this.state.usuario.nome} onChange={this.handleInputChange}/>
          </div>
          <div className='form-group'>
            <input  className='form-control' name='ccusto' placeholder='Centro de Custo' type='text'value={this.state.usuario.ccusto} onChange={this.handleInputChange}/>
          </div>
          <div className='form-group'>
            <select  className='form-control' name='setor' value={this.state.usuario.setor} onChange={this.handleInputChange}>
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
          <div className='form-group'>
            <select  className='form-control' name='filial' value={this.state.usuario.filial} onChange={this.handleInputChange}>
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
          <div className='form-group'>
            <input  className='form-control' name='email' placeholder='E-mail' type='email' value={this.state.usuario.email} onChange={this.handleInputChange}/>
          </div>
          <div className='form-group'>
            <input  className='form-control' name='senha' placeholder='Senha' type='password' value={this.state.usuario.senha} onChange={this.handleInputChange}/>
          </div>
          <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
          <Link to='/login' className='btn btn-secondary ml-4' >Cancelar</Link>
        </form>
      </section>
    )
  }
}
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ListConf from '../../../ListConf';

export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.cadastrar = this.cadastrar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      redirect: false,
      msg: {
        class: '',
        texto: '',
      },
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
    this.setState({ usuario })
  }

  cadastrar(e) {
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(this.state.usuario)
    }).then(response => {
      return response.json()
    }).then(result => {
      if (result.error) {
        throw new Error(result.message)
      }
      this.setState({ msg: { class: "alert alert-success", texto: 'Usuário cadastrado com sucesso!' } })
      setTimeout(() => { this.setState({ redirect: true }) }, 2000);
    }).catch(error => {
      this.setState({ msg: { class: "alert alert-danger", texto: error.message } })
    })
  }

  render() {
    const usuario = this.state.usuario;
    if (this.state.redirect) {
      return (<Redirect to='/login' />)
    }
    return (
      <section className='container'>
        {!!this.state.msg.texto && <div className={this.state.msg.class} role="alert">{this.state.msg.texto}</div>}
        <h2 className='h2'>Crie seu usuário para ter acesso ao sistema!</h2>
        <form className='mt-4' onSubmit={this.cadastrar}>
          <div className='form-group'>
            <input className='form-control' name='nome' placeholder='Nome' type='text' required value={usuario.nome} onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <input className='form-control' name='ccusto' placeholder='Centro de Custo' required type='text' value={usuario.ccusto} onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <select className='form-control' name='setor' value={usuario.setor} onChange={this.handleInputChange}>
              <option value='' disabled selected>Escolha seu Setor!</option>
              {ListConf.SETORES.map(setor => (
                <option value={setor.codigo}>{setor.nome}</option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <select className='form-control' name='filial' value={usuario.filial} onChange={this.handleInputChange}>
              <option value='' disabled selected>Escolha sua Filial!</option>
              {ListConf.FILIAIS.map(filial => (
                <option value={filial.nome}>{filial.nome}</option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <input className='form-control' name='email' placeholder='E-mail' type='email' required value={usuario.email} onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <input className='form-control' name='senha' placeholder='Senha' type='password' required value={usuario.senha} onChange={this.handleInputChange} />
          </div>
          <input className='btn btn-primary' type="submit" name="cadastrar" id="cadastrar" value="Cadastrar" />
          <Link to='/login' className='btn btn-secondary ml-4' >Voltar</Link>
        </form>
      </section>
    )
  }
}
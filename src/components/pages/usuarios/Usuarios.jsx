import React, { Component } from 'react';
import UsuariosForm from './UsuariosForm';
import UsuariosTable from './UsuariosTable';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsuariosActions from '../../../store/actions/usuarios';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.salvar = this.salvar.bind(this);
    this.alterar = this.alterar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.limpar = this.limpar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      msg: {
        class: '',
        texto: '',
      },
      usuario: {
        _id: '',
        nome: '',
        ccusto: '',
        setor: '',
        filial: '',
        email: '',
        senha: '',
        confsenha: '',
        admin: false
      }
    }
  }

  componentWillMount() {
    this.props.getUsuarios()
  }

  handleInputChange(e) {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({ usuario })
  }

  limpar() {
    this.setState({
      msg: {
        texto: '',
      },
      usuario: {
        _id: '',
        nome: '',
        ccusto: '',
        setor: '',
        filial: '',
        email: '',
        senha: '',
        confsenha: '',
        admin: false
      }
    })
  }

  salvar(e) {
    e.preventDefault();
    let usuarioCadastro = this.state.usuario;
    let usuarioID = usuarioCadastro._id

    if (!usuarioID) {
      try {
        if (usuarioCadastro.senha !== usuarioCadastro.confsenha) {
          throw new Error('A confirmação de senha não bate')
        }

        delete usuarioCadastro.confsenha;
        delete usuarioCadastro._id;

        fetch('http://localhost:5000/users', {
          method: 'POST',
          body: JSON.stringify(usuarioCadastro)
        }).then(response => {
          return response.json()
        }).then(result => {
          if (result.error) {
            throw new Error(`Não foi possivel cadastrar o usuário - ${result.message}`)
          }
          this.setState({ msg: { className: "alert alert-success", texto: 'Usuário cadastrado com sucesso!' } })
          setTimeout(() => {
            this.limpar()
          }, 2000);
        }).catch(error => {
          this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
        })
      } catch (error) {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      }
    } else {
      delete usuarioCadastro.confsenha;
      delete usuarioCadastro.senha;
      delete usuarioCadastro._id;
      delete usuarioCadastro.deleted;
      delete usuarioCadastro.__v;

      fetch(`http://localhost:5000/users/${usuarioID}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('auth-token')
        },
        body: JSON.stringify(usuarioCadastro)
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel atualizar o usuário - ${result.message}`)
        }
        this.setState({ msg: { className: "alert alert-success", texto: 'Usuário atualizado com sucesso!' } })
        setTimeout(() => {
          this.limpar()
        }, 2000);
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })
    }
  }

  alterar(usuario) {
    this.setState({ usuario })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  excluir(usuario) {
    let yesNo = window.confirm('Deseja realmente excluir este usuário?')
    if (yesNo) {
      fetch(`http://localhost:5000/users/${usuario._id}`, {
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('auth-token')
        }
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel excluir o usuário - ${result.message}`)
        }
        this.limpar()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })
    }
  }

  render() {
    return (
      <section>
        {!!this.state.msg.texto && <div className={this.state.msg.className} role="alert">{this.state.msg.texto}</div>}
        <h2 className='h2 mt-4'>Controle de Usuários</h2>
        <UsuariosForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} usuario={this.state.usuario} />
        <UsuariosTable usuarios={this.props.usuarios} handleChange={this.alterar} handleDelete={this.excluir} ></UsuariosTable>
        {!!this.props.usuarios.loading && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>)}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuarios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsuariosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
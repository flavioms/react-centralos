import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsuariosForm from './UsuariosForm';
import UsuariosTable from './UsuariosTable';
import * as action from '../../actions/usuarios';
import { usuarioThunks } from '../../thunks/usuario';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.alterar = this.alterar.bind(this);
    this.salvar = this.salvar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.limpar = this.limpar.bind(this);
    this.state = {
      msg: '',
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

  handleInputChange(e) {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({ usuario })
  }

  async salvar(e) {
    e.preventDefault();
    let usuarioCadastro = this.state.usuario;
    let usuarioID = usuarioCadastro._id
    if (!usuarioID) {
      if (usuarioCadastro.senha === usuarioCadastro.confsenha) {
        delete usuarioCadastro.confsenha;
        delete usuarioCadastro._id;
      } else {
        this.setState({msg: 'As senhas informadas não conferem!'})
        return null
      }
      await this.props.add(usuarioCadastro)
      setTimeout(() => {
        this.limpar()
      }, 2000);

    } else {
      delete usuarioCadastro.confsenha;
      delete usuarioCadastro.senha;
      delete usuarioCadastro._id;
      delete usuarioCadastro.deleted;
      delete usuarioCadastro.__v;

      await this.props.patch(usuarioID, usuarioCadastro)
      setTimeout(() => {
        this.limpar()
      }, 2000);
    }
  }

  async excluir(usuario) {
    let yesNo = window.confirm('Deseja realmente excluir este usuário?')
    if (yesNo) {
      await this.props.delete(usuario._id)
      setTimeout(() => {
        this.limpar()
      }, 1000);
    }
  }

  alterar(usuario) {
    this.setState({ usuario })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  limpar() {
    this.setState({
      msg: '',
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

    this.props.getAll()
  }


  componentWillMount() {
    this.limpar()
  }

  render() {
    return (
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Usuário cadastrado com sucesso!</div>}
        <h2 className='h2 mt-4'>Controle de Usuários</h2>
        <UsuariosForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} usuario={this.state.usuario} msg={this.state.msg}/>
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
  usuarios: state.usuarios.lista,
  error: state.usuarios.error,
  success: state.usuarios.success
})

const mapDispatchToProps = dispatch => ({
  add: usuario => dispatch(action.postUsuario(usuario)),
  get: id => dispatch(action.getUsuario(id)),
  getAll: () => dispatch(usuarioThunks.getAll()),
  patch: (id, usuario) => dispatch(action.patchUsuario(id, usuario)),
  delete: id => dispatch(action.deleteUsuario(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
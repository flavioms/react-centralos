import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/modulos';
import { moduloThunks } from '../../thunks/modulos';
import ModuloForm from './ModulosForm';
import ModuloTable from './ModulosTable';

class Modulos extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.salvar = this.salvar.bind(this);
    this.alterar = this.alterar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.limpar = this.limpar.bind(this);
    this.state = {
      listaModulos: [],
      msg: {
        texto: ''
      },
      modulo: {
        _id: '',
        sigla: '',
        nome: ''
      }
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    this.limpar();
  }

  limpar() {
    this.setState(this.baseState)
    this.props.getAll()
  }

  async salvar(e) {
    e.preventDefault();
    let moduloCadastro = this.state.modulo;
    let moduloID = moduloCadastro._id;

    if (!moduloID) {
      delete moduloCadastro._id;
      await this.props.add(moduloCadastro)
    } else {
      delete moduloCadastro._id;
      delete moduloCadastro.deleted;
      delete moduloCadastro.__v;
      await this.props.patch(moduloID, moduloCadastro)
    }
    setTimeout(() => {
      this.limpar()
    }, 1000);
  }

  alterar(modulo) {
    this.setState({ modulo })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  excluir(modulo) {
    let yesNo = window.confirm('Deseja realmente excluir este módulo?')
    if(yesNo){
      this.props.delete(modulo._id)
      setTimeout(() => {
        this.limpar()
      }, 1000);
    }
  }

  handleInputChange(e) {
    let modulo = Object.assign({}, this.state.modulo);
    modulo[e.target.name] = e.target.value;
    this.setState({ modulo })
  }

  render() {
    return (
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Categoria cadastrada com sucesso!</div>}
        <h2 className='h2 mt-4'>Controle de Módulos</h2>
        <ModuloForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} modulo={this.state.modulo} />
        <ModuloTable modulos={this.props.modulos} handleChange={this.alterar} handleDelete={this.excluir} />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  modulos: state.modulos.lista,
  error: state.modulos.error,
  success: state.modulos.success
})

const mapDispatchToProps = dispatch => ({
  add: modulo => dispatch(action.postModulo(modulo)),
  patch: (id, modulo) => dispatch(action.patchModulo(id, modulo)),
  getAll: () => dispatch(moduloThunks.getAll()),
  delete: id => dispatch(action.deleteModulo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modulos)
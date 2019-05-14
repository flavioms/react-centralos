import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/categorias';
import { categoriaThunks } from '../../thunks/categorias';
import CategoriasForm from './CategoriasForm';
import CategoriasTable from './CategoriasTable';

class Categorias extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.salvar = this.salvar.bind(this);
    this.alterar = this.alterar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.limpar = this.limpar.bind(this);
    this.state = {
      listaCategorias: [],
      msg: {
        texto: ''
      },
      categoria: {
        _id: '',
        nome: '',
        sla: ''
      }
    }
    this.baseState = this.state
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
    let categoriaCadastro = this.state.categoria;
    let categoriaID = categoriaCadastro._id;

    if (!categoriaID) {
      delete categoriaCadastro._id;
      await this.props.add(categoriaCadastro)
    } else {
      delete categoriaCadastro._id;
      delete categoriaCadastro.deleted;
      delete categoriaCadastro.__v;
      await this.props.patch(categoriaID, categoriaCadastro)
    }
    setTimeout(() => {
      this.limpar()
    }, 1000);
  }

  alterar(categoria) {
    this.setState({ categoria })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  excluir(categoria) {
    let yesNo = window.confirm('Deseja realmente excluir esta categoria?')
    if(yesNo){
      this.props.delete(categoria._id)
      setTimeout(() => {
        this.limpar()
      }, 1000);
    }
  }
  
  handleInputChange(e) {
    let categoria = Object.assign({}, this.state.categoria);
    categoria[e.target.name] = e.target.value;
    this.setState({categoria})
  }

  render(){
    return(
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Categoria cadastrada com sucesso!</div>}
        <h2 className='h2 mt-4'>Controle de Categorias</h2>
        <CategoriasForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} categoria={this.state.categoria}/>
        <CategoriasTable categorias={this.props.categorias} handleChange={this.alterar} handleDelete={this.excluir}/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  categorias: state.categorias.lista,
  error: state.categorias.error,
  success: state.categorias.success
})

const mapDispatchToProps = dispatch => ({
  add: categoria => dispatch(action.postCategoria(categoria)),
  patch: (id, categoria) => dispatch(action.patchCategoria(id, categoria)),
  getAll: () => dispatch(categoriaThunks.getAll()),
  delete: id => dispatch(action.deleteCategoria(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categorias)
import React, { Component } from 'react';
import CategoriasForm from './CategoriasForm';
import CategoriasTable from './CategoriasTable';

export default class Categorias extends Component {
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
  }

  componentDidMount() {
    this.limpar();
  }

  limpar() {
    fetch('http://localhost:5000/categorias', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('auth-token')
      }
    })
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          listaCategorias: result,
          msg: {
            texto: '',
          },
          categoria: {
            _id: '',
            nome: '',
            sla: ''
          }
        })
      })
  }

  salvar(e) {
    e.preventDefault();
    let categoriaCadastro = this.state.categoria;
    let categoriaID = categoriaCadastro._id;

    if (!categoriaID) {
      delete categoriaCadastro._id;

      fetch('http://localhost:5000/categorias', {
        method: 'POST',
        body: JSON.stringify(categoriaCadastro),
        headers: {
          authorization: localStorage.getItem('auth-token')
        }
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel cadastrar a categoria - ${result.message}`)
        }
        this.setState({ msg: { className: "alert alert-success", texto: 'Categoria cadastrada com sucesso!' } })
        setTimeout(() => {
          this.limpar()
        }, 2000);
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })

    } else {
      delete categoriaCadastro._id;
      delete categoriaCadastro.deleted;
      delete categoriaCadastro.__v;

      fetch(`http://localhost:5000/categorias/${categoriaID}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('auth-token')
        },
        body: JSON.stringify(categoriaCadastro)
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel atualizar a categoria - ${result.message}`)
        }
        this.setState({ msg: { className: "alert alert-success", texto: 'Categoria atualizada com sucesso!' } })
        setTimeout(() => {
          this.limpar()
        }, 2000);
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })

    }

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
      fetch(`http://localhost:5000/categorias/${categoria._id}`, {
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('auth-token')
        }
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel excluir a categoria - ${result.message}`)
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
  
  handleInputChange(e) {
    let categoria = Object.assign({}, this.state.categoria);
    categoria[e.target.name] = e.target.value;
    this.setState({categoria})
  }

  render(){
    return(
      <section>
        {!!this.state.msg.texto && <div className={this.state.msg.className} role="alert">{this.state.msg.texto}</div>}
        <h2 className='h2 mt-4'>Controle de Categorias</h2>
        <CategoriasForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} categoria={this.state.categoria}/>
        <CategoriasTable categorias={this.state.listaCategorias} handleChange={this.alterar} handleDelete={this.excluir}/>
      </section>
    )
  }
}
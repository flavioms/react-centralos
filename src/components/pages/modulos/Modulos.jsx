import React, { Component } from 'react';
import ModuloForm from './ModulosForm';
import ModuloTable from './ModulosTable';

export default class Modulos extends Component {
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
    }
  }

  componentDidMount() {
    this.limpar();
  }

  limpar() {
    fetch('http://localhost:5000/modulos', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('auth-token')
      }
    })
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          listaModulos: result,
          msg: {
            texto: '',
          },
          modulo: {
            _id: '',
            sigla: '',
            nome: ''
          }
        })
      })
  }

  salvar(e) {
    e.preventDefault();
    let moduloCadastro = this.state.modulo;
    let moduloID = moduloCadastro._id;

    if (!moduloID) {
      delete moduloCadastro._id;

      fetch('http://localhost:5000/modulos', {
        method: 'POST',
        body: JSON.stringify(moduloCadastro),
        headers: {
          authorization: localStorage.getItem('auth-token')
        }
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel cadastrar o módulo - ${result.message}`)
        }
        this.setState({ msg: { className: "alert alert-success", texto: 'Módulo cadastrado com sucesso!' } })
        setTimeout(() => {
          this.limpar()
        }, 2000);
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })

    } else {
      delete moduloCadastro._id;
      delete moduloCadastro.deleted;
      delete moduloCadastro.__v;

      fetch(`http://localhost:5000/modulos/${moduloID}`, {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('auth-token')
        },
        body: JSON.stringify(moduloCadastro)
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel atualizar o módulo - ${result.message}`)
        }
        this.setState({ msg: { className: "alert alert-success", texto: 'Módulo atualizado com sucesso!' } })
        setTimeout(() => {
          this.limpar()
        }, 2000);
      }).catch(error => {
        this.setState({ msg: { className: "alert alert-danger", texto: error.message } })
      })

    }

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
      fetch(`http://localhost:5000/modulos/${modulo._id}`, {
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('auth-token')
        }
      }).then(response => {
        return response.json()
      }).then(result => {
        if (result.error) {
          throw new Error(`Não foi possivel excluir o módulo - ${result.message}`)
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
    let modulo = Object.assign({}, this.state.modulo);
    modulo[e.target.name] = e.target.value;
    this.setState({ modulo })
  }

  render() {
    return (
      <section>
        {!!this.state.msg.texto && <div className={this.state.msg.className} role="alert">{this.state.msg.texto}</div>}
        <h2 className='h2 mt-4'>Controle de Módulos</h2>
        <ModuloForm handleSubmit={this.salvar} handleClear={this.limpar} handleInputChange={this.handleInputChange} modulo={this.state.modulo} />
        <ModuloTable modulos={this.state.listaModulos} handleChange={this.alterar} handleDelete={this.excluir} />
      </section>
    )
  }
}
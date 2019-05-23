import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { chamadoThunks } from '../../thunks/chamado';
import { categoriaThunks } from '../../thunks/categorias';
import { moduloThunks } from '../../thunks/modulos';
import ChamadosForm from './ChamadosForm';
import ChamadosTable from './ChamadosTable';
import { push } from 'connected-react-router';
const userInfo = JSON.parse(localStorage.getItem('user-info'))

class ChamadosAbrir extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.salvar = this.salvar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.alterar = this.excluir.bind(this);
    this.limpar = this.limpar.bind(this);
    this.state = {
      chamado: {
        status: '',
        titulo: '',
        categoria: '',
        modulo: '',
        totvs: '',
        setor: '',
        usuario: {
          nome: '',
          email: '',
          setor: '',
          ccusto: ''
        },
        problema: '',
        suporte: '',
        dtAbertura: '',
        dtEncerramento: '',
        timelapse: [],
        interacoes: []
      }
    }
    this.baseState = this.state
  }

  componentWillMount() {
    this.limpar()
  }

  handleInputChange(e) {
    let chamado = Object.assign({}, this.state.chamado);
    chamado[e.target.name] = e.target.value;
    this.setState({ chamado })
  }

  async salvar(e) {
    e.preventDefault();
    let usuario = {
      nome: userInfo.nome,
      setor: userInfo.setor,
      ccusto: userInfo.ccusto,
      email: userInfo.email,
    }
    let chamadoCadastro = {
      ...this.state.chamado,
      status: 'Aguardando Atendimento',
      usuario,
      dtAbertura: new Date,
      timelapse: [{ status: 'Aguardando Atendimento', horario: new Date }],
      interacoes: [
        {
          usuario: {...usuario},
          texto: this.state.chamado.problema,
          data: new Date
        }
      ]
    }

    delete chamadoCadastro.problema;
    delete chamadoCadastro.dtEncerramento;
    await this.props.add(chamadoCadastro)
  }

  async excluir(chamado) {
    let yesNo = window.confirm('Deseja realmente excluir este chamado?')
    if (yesNo) {
      await this.props.delete(chamado._id)
      setTimeout(() => {
        this.limpar()
      }, 1000);
    }
  }

  limpar() {
    this.setState(this.baseState)
    this.props.getAll()
    this.props.getAllCategorias()
    this.props.getAllModulos()

  }

  render() {
    return (
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Chamado cadastrado com sucesso!</div>}
        <h2 className='h2 mt-4'>Abrir um novo chamado</h2>
        <ChamadosForm handleInputChange={this.handleInputChange} handleSubmit={this.salvar} categorias={this.props.categorias} modulos={this.props.modulos} chamado={this.state.chamado} />
        <ChamadosTable chamados={this.props.chamados} handleDelete={this.excluir} handleOpen={this.props.open}></ChamadosTable>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  chamados: state.chamados.lista.filter(ticket => ticket.setor !== userInfo.setor && ticket.usuario.setor === userInfo.setor),
  error: state.chamados.error,
  success: state.chamados.success,
  categorias: state.categorias.lista,
  modulos: state.modulos.lista,
})

const mapDispatchToProps = dispatch => ({
  add: chamado => dispatch(action.postChamado(chamado)),
  getAll: () => dispatch(chamadoThunks.getAll()),
  getAllCategorias: () => dispatch(categoriaThunks.getAll()),
  getAllModulos: () => dispatch(moduloThunks.getAll()),
  delete: id => dispatch(action.deleteChamado(id)),
  open: id => dispatch(push(`/chamado/${id}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosAbrir)
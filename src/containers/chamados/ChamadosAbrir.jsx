import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { chamadoThunks } from '../../thunks/chamado';
import ChamadosForm from './ChamadosForm';
import ChamadosTable from './ChamadosTable';
import { STATUS } from '../../constants/list.conf';
import { push } from 'connected-react-router';

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
    this.props.getAll()
  }

  handleInputChange(e) {
    let chamado = Object.assign({}, this.state.chamado);
    chamado[e.target.name] = e.target.value;
    this.setState({ chamado })
  }

  async salvar(e) {
    e.preventDefault();
    let userInfo = JSON.parse(localStorage.getItem('user-info'))
    let usuario = {
      nome: userInfo.nome,
      setor: userInfo.setor,
      ccusto: userInfo.ccusto,
      email: userInfo.email,
    }
    let chamadoCadastro = {
      ...this.state.chamado,
      status: STATUS.AGUARDANDO_ATENDIMENTO,
      usuario,
      dtAbertura: new Date,
      timelapse: [{ status: STATUS.AGUARDANDO_ATENDIMENTO, horario: new Date }],
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
    console.log(chamadoCadastro)
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
  }

  render() {
    return (
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Chamado cadastrado com sucesso!</div>}
        <h2 className='h2 mt-4'>Abrir um novo chamado</h2>
        <ChamadosForm handleInputChange={this.handleInputChange} handleSubmit={this.salvar}  chamado={this.state.chamado} />
        <ChamadosTable chamados={this.props.chamados} handleDelete={this.excluir} handleOpen={this.props.open}></ChamadosTable>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  chamados: state.chamados.lista.filter(ticket => ticket.setor !== ticket.usuario.setor),
  error: state.chamados.error,
  success: state.chamados.success
})

const mapDispatchToProps = dispatch => ({
  add: chamado => dispatch(action.postChamado(chamado)),
  getAll: () => dispatch(chamadoThunks.getAll()),
  delete: id => dispatch(action.deleteChamado(id)),
  open: id => dispatch(push(`/chamado/${id}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosAbrir)
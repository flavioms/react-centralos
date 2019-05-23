import React, { Component } from 'react';
import ChamadosTable from '../chamadosAtender/ChamadosTable';
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { chamadoThunks } from '../../thunks/chamado';
import { push } from 'connected-react-router';
import moment from 'moment';
const userInfo = JSON.parse(localStorage.getItem('user-info'));

class ChamadosAtender extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAll()
  }

  excluir = async (chamado) => {
    let yesNo = window.confirm('Deseja realmente excluir este chamado?')
    if (yesNo) {
      await this.props.delete(chamado._id)
      setTimeout(() => {
        this.props.getAll()
      }, 1000);
    }
  }

  atender = async (chamado) => {
    let usuario = userInfo.nome;
    let chamadoAtender = {
      ...chamado,
      suporte: usuario,
      timelapse: [...chamado.timelapse, { status: 'Em Atendimento', horario: new Date }],
    }
    delete chamadoAtender._id;
    delete chamadoAtender.deleted;
    delete chamadoAtender.__v;

    await this.props.patch(chamado._id, chamadoAtender)
    setTimeout(() => {
      this.props.getAll()
    }, 1000);
  }

  encerrar = async (chamado) => {
    let usuario = userInfo.nome;
    let chamadoAtender = {
      ...chamado,
      dtEncerramento: new Date,
      suporte: usuario,
      status: 'Encerrado',
      timelapse: [...chamado.timelapse, { status: 'Encerrado', horario: new Date }],
    }
    delete chamadoAtender._id;
    delete chamadoAtender.deleted;
    delete chamadoAtender.__v;

    await this.props.patch(chamado._id, chamadoAtender)
    setTimeout(() => {
      this.props.getAll()
    }, 1000);
  }

  render() {
    return (
      <section>
        {!!this.props.error && <div className='alert alert-danger' role="alert">{this.props.error.message}</div>}
        {!!this.props.success && <div className='alert alert-success' role="alert">Chamado cadastrado com sucesso!</div>}
        <h2 className='h2 mt-4'>Chamados para serem atendidos!</h2>
        <ChamadosTable 
          chamados={this.props.chamados} 
          handleDelete={this.excluir} 
          handleAnswer={this.atender} 
          handleOpen={this.props.open} 
          handleFinish={this.encerrar}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  chamados: state.chamados.lista.filter(ticket => ticket.setor === userInfo.setor),
  error: state.chamados.error,
  success: state.chamados.success
})

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(chamadoThunks.getAll()),
  patch: (id, chamado) => dispatch(action.patchChamado(id, chamado)),
  delete: id => dispatch(action.deleteChamado(id)),
  open: id => dispatch(push(`/chamado/${id}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosAtender)
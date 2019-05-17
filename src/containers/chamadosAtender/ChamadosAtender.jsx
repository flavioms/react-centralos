import React, { Component } from 'react';
import ChamadosTable from '../chamadosAbrir/ChamadosTable';
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { chamadoThunks } from '../../thunks/chamado';
import { push } from 'connected-react-router';
import moment from 'moment';
const userInfo = JSON.parse(localStorage.getItem('user-info'))

class ChamadosAtender extends Component {
  constructor(){
    super()
  }

  componentWillMount() {
    this.props.getAll()
  }
  
  render() {
    return(
      <section>
        {console.log(moment.locale())}
        <h2 className='h2 mt-4'>Chamados para serem atendidos!</h2>
        <ChamadosTable chamados={this.props.chamados}></ChamadosTable>
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
  delete: id => dispatch(action.deleteChamado(id)),
  open: id => dispatch(push(`/chamado/${id}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosAtender)
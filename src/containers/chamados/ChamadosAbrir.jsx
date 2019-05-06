import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/chamados';
import { chamadoThunks } from '../../thunks/chamado';
import ChamadosForm from './ChamadosForm';
import ChamadosTable from './ChamadosTable';

class ChamadosAbrir extends Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
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
          setor: '',
          ccusto: ''
        },
        suporte: '',
        dtAbertura: '',
        dtEncerramento: '',
        timelapse: [],
        interacoes: []
      }
    }
  }

  componentWillMount() {
    this.props.getAll()
  }

  handleInputChange(e) {
    let chamado = Object.assign({}, this.state.chamado);
    chamado[e.target.name] = e.target.value;
    this.setState({chamado})
  }

  render() {
    return(
      <section>
        {console.log(this.props)}
        <h2 className='h2 mt-4'>Abrir um novo chamado</h2>
        <ChamadosForm  handleInputChange={this.handleInputChange} chamado={this.state.chamado}/>
        <ChamadosTable chamados={this.props.chamados}></ChamadosTable>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  chamados: state.chamados.lista,
  error: state.chamados.error,
  success: state.chamados.success
})

const mapDispatchToProps = dispatch => ({
  add: chamado => dispatch(action.postChamado(chamado)),
  get: id => dispatch(action.getChamado(id)),
  getAll: () => dispatch(chamadoThunks.getAll()),
  patch: (id, chamado) => dispatch(action.patchChamado(id, chamado)),
  delete: id => dispatch(action.deleteChamado(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChamadosAbrir)